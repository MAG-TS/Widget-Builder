import React, { useState, useEffect } from 'react'
import { Button, FlexboxGrid, ButtonGroup, Input } from 'rsuite';
import './builder.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import HeadingSmall from './HeadingSmall';
import HeadingMedium from './HeadingMedium';
import HeadingLarge from './HeadingLarge';
import Paragraph from './Paragraph';
import Link from './Link';
import Axios from 'axios';

export default function WidgetBuilder(props) {
    const avaialbleElements = [
        {id: 'Heading-Small'},
        {id: 'Heading-Medium'},
        {id: 'Heading-Large'},
        {id: 'Paragraph'}
    ]
    const [counter, setCounter] = useState(0)
    const [availableElements, setAvailableElements] = useState(avaialbleElements);
    const [addedElements, setAddedElements] = useState([]);
    const [size, setSize] = useState(24);
    const [lastFocus, setLastFocus] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [API, setAPI] = useState('');
    const [errors, setErrors] = useState([])
    


    const handleElementText = (e) => {
        let allAddedElements = addedElements;
        const elementIndex = allAddedElements.findIndex(element => element.id.toString() === e.target.id);
        setLastFocus(allAddedElements[elementIndex].id)
        allAddedElements[elementIndex].content = e.target.value;
        console.log(allAddedElements)
        setAddedElements(allAddedElements);
        setCounter(counter + 1);        
    }

    const removeFocus = () => {
        setLastFocus('')
    }

    const changeCardSize = (e) => {
        let element = document.getElementById(e.target.id);
        //Removes orange color from all size buttons in the group
        document.getElementById('size4').classList.remove('rs-btn-orange');
        document.getElementById('size6').classList.remove('rs-btn-orange');
        document.getElementById('size8').classList.remove('rs-btn-orange');
        document.getElementById('size12').classList.remove('rs-btn-orange');
        //Adds orange color on the clicked element
        element.classList.add('rs-btn-orange');
        //Saves size in state to switch the size of the card
        setSize(e.target.value);
    }

    useEffect(() => {
        if(lastFocus !== ''){
            document.getElementById(lastFocus).focus();
        }
    }, [counter])

    const AddElement = (props) => {
        if(props.element === "Heading-Small"){return <HeadingSmall index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText}/>}
        if(props.element === "Heading-Medium"){return <HeadingMedium index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText}/>}
        if(props.element === "Heading-Large"){return <HeadingLarge index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText}/>}
        if(props.element === "Paragraph"){return <Paragraph index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText}/>}
        if(props.element === "Link"){return <Link index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText}/>}
    }

    function handleOnDragEnd(result){
        if(!result.destination) return;
        if(result.destination.droppableId === "added-elements" && result.source.droppableId === "available-elements" ){
            let elements = addedElements;
            let newElement = {
                id: result.draggableId + counter,
                identifier: result.draggableId,
                content: '',
                element: result.draggableId,
                placeholder: "Enter text"
            }
            let addedElementArray = Array.from(addedElements);
            addedElementArray.splice(result.destination.index, 0, newElement);
            setAddedElements(addedElementArray);
            setCounter(counter + 1);
            return
        } else if(result.destination.droppableId === "added-elements" && result.source.droppableId === "added-elements"){
            const elementArray = Array.from(addedElements);
            const [reorderedElementArray] = elementArray.splice(result.source.index, 1);
            elementArray.splice(result.destination.index, 0, reorderedElementArray);
            console.log(elementArray)
            setAddedElements(elementArray);
        } 
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const onSubmit = (event) => {
    event.preventDefault();

    Axios({
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            name: name,
            description: description,
            api: API,
            structure: addedElements
        },
        withCredentials: true,
        url: "/widget-builder/create-widget",
        }).then((res) => console.log(res));
    }

    return (
        <div className="widget-builder-container">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="widget-builder-side-bar">
                <h4 className="padding-bot-8">Add Elements</h4>
                <div id="element-picker">
                    <Droppable droppableId="available-elements">
                        {(provided) => 
                            <ul className="builder-element-list" {...provided.droppableProps} ref={provided.innerRef}>
                                
                                {availableElements.map(({id}, index) => {
                                    return(
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => 
                                                <li className="builder-element" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <div>
                                                        <img src="" />
                                                        <div>{id}</div>
                                                    </div>                               
                                                </li>
                                            }
                                        </Draggable>
                                    )
                                    
                                })}
                                {provided.placeholder}
                            </ul> 
                        }
                    </Droppable>
                </div>

                       
            </div>
           
           
            <div className="widget-builder-main-column container">
                 
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item>
                            <ButtonGroup id="size-btn-group">
                            <Button onClick={changeCardSize} id="size4" value="6" appearance='default' >4 Column</Button>
                            <Button onClick={changeCardSize} id="size6" value="12" appearance='default'>6 Column</Button>
                            <Button onClick={changeCardSize} id="size8" value="18" appearance='default'>8 Column</Button>
                            <Button onClick={changeCardSize} id="size12" value="24" appearance='default' color="orange">12 Column</Button>
                            </ButtonGroup>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                
                <FlexboxGrid className="full-height" justify="center" align="middle">
                    

                        <FlexboxGrid.Item colspan={size}>
                            <Droppable droppableId="added-elements">
                                {(provided) => 
                                <ul className="builder-element-list element-card" {...provided.droppableProps} ref={provided.innerRef}>
                                    {console.log(addedElements)}
                                    {addedElements.map(({id, element, content}, index) => {
                                        return(
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => 
                                                    <li className="element" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <AddElement id={id} index={index} content={content} element={element} />                       
                                                    </li>
                                                }
                                            </Draggable>
                                        )
                                        
                                    })}
                                    {provided.placeholder}
                                </ul>
                                }
                            </Droppable>
                            
                            
                        </FlexboxGrid.Item>

                   
                </FlexboxGrid>
                
            </div>
        
            <div className="widget-builder-side-bar">
                    <label>Widget name</label>
                    <input className="widget-name" onChange={handleName} />
                    <label>Widget description</label>
                    <textarea className="widget-description" onChange={handleDescription} />
                    <ButtonGroup justified className="padding-bot-16">
                        <Button appearance='default' color="orange">API</Button>
                        <Button appearance='disabled'>CSS</Button>
                    </ButtonGroup>
                    <Button id="submit-btn" className="width-100" appearance='default' color="orange" onClick={onSubmit}>Create widget</Button>
               
            </div>
            </DragDropContext>
        </div>
    )
}
