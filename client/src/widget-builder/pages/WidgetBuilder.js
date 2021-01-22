import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button, FlexboxGrid, ButtonGroup, Divider, Tree } from 'rsuite';
import './builder.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import HeadingSmall from '../components/HeadingSmall';
import HeadingMedium from '../components/HeadingMedium';
import HeadingLarge from '../components/HeadingLarge';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Axios from 'axios';

export default function WidgetBuilder(props) {
    const history = useHistory();

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
    const [APITest, setAPITest] = useState([]);
    const [header, setHeader] = useState('{ "Content-Type":"application/json" }');
    const [errors, setErrors] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);


    const handleElementText = (e) => {
        let allAddedElements = addedElements;
        const elementIndex = allAddedElements.findIndex(element => element.id.toString() === e.target.id);
        setLastFocus(allAddedElements[elementIndex].id)
        allAddedElements[elementIndex].content = e.target.value;
        setAddedElements(allAddedElements);
        setCounter(counter + 1);        
    }

    const selectElement = (e) => {
        
        if(document.getElementsByClassName('rs-tree-node-active')[0] !== undefined){
            document.getElementsByClassName('rs-tree-node-active')[0].classList.remove('rs-tree-node-active');
        }
        
        for(let i=0; i < addedElements.length; i++){
            if(addedElements[i].id === e.target.id){
                /*
                if(addedElements[i].apiKey !== null){
                    //console.log(document.getElementsByClassName('rs-tree-node-active')[0])
                    document.getElementsByClassName('rs-tree-node-active')[0] = addedElements[i].apiKey;
                }
                */
                console.log(e.target.id)
                setSelectedElement(e.target.id)
            }
        }
        
    }

    const handleTreeSelect = (item) => {
        console.log(item)
        for(let i=0; i < addedElements.length; i++){
            if(addedElements[i].id === selectedElement){
                addedElements[i].apiKey = item
                setCounter(counter + 1);
            }
        }
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
        if(props.element === "Heading-Small"){return <HeadingSmall apiKey={props.apiKey} index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText} selectElement={selectElement} />}
        if(props.element === "Heading-Medium"){return <HeadingMedium apiKey={props.apiKey} index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText} selectElement={selectElement} />}
        if(props.element === "Heading-Large"){return <HeadingLarge apiKey={props.apiKey} index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText} selectElement={selectElement} />}
        if(props.element === "Paragraph"){return <Paragraph apiKey={props.apiKey} index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText} selectElement={selectElement} />}
        if(props.element === "Link"){return <Link apiKey={props.apiKey} index={props.index} content={props.content} identifier={props.id} handleElementText={handleElementText} selectElement={selectElement} />}
    }

    function handleOnDragEnd(result){
        
        if(document.getElementsByClassName('rs-tree-node-active')[0] !== undefined){
            document.getElementsByClassName('rs-tree-node-active')[0].classList.remove('rs-tree-node-active');
        }
        
        if(!result.destination) return;
        if(result.destination.droppableId === "added-elements" && result.source.droppableId === "available-elements" ){
            let elements = addedElements;
            let newElement = {
                id: result.draggableId + counter,
                identifier: result.draggableId,
                content: '',
                element: result.draggableId,
                placeholder: "Enter text",
                apiKey: null
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
        if(result.destination.droppableId === "remove-elements"){
            const elementArray = addedElements.filter(element => element.id !== result.draggableId);
            setAddedElements(elementArray);
        }
    }

    

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleAPI = (e) => {
        setAPI(e.target.value);
    }
    
    const handleHeader = (e) => {
        setHeader(e.target.value);
    }

    const testAPI = () => {
        console.log("testing API")
        console.log(header)
        let customHeader = JSON.parse(header);
        console.log(customHeader);

        Axios({
            method: "GET",
            headers: customHeader,
            withCredentials: false,
            url: API,
        }).then((res) => {
            let result = res.data;
            let resultArray = [];
            let format;
            for(let prop in result){
                //console.log(result[prop])
                
                    format = {
                        name: prop,
                    }
                
                resultArray.push(format);
            }
            console.log(resultArray)
            //Object.keys(result).forEach(item => console.log(item))
            setAPITest(resultArray);
        })
        
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
            header: header,
            structure: addedElements
        },
        withCredentials: true,
        url: "/widget-builder/create-widget",
        }).then((res) => history.push('/'));
    }

    return (
        <div className="widget-builder-container">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="widget-builder-left-side-bar">
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

                <Droppable  droppableId="remove-elements">
                    {(provided) => 
                        <div className="remove-elements" {...provided.droppableProps} ref={provided.innerRef}>
                            <span>Remove element</span>
                        </div>
                    }
                </Droppable>
            </div>
           
           
            <div className="widget-builder-main-column container">
                 
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item>
                            <ButtonGroup id="size-btn-group">
                            <Button onClick={changeCardSize} id="size4" value="6" appearance='default' className="button-shadow">4 Column</Button>
                            <Button onClick={changeCardSize} id="size6" value="12" appearance='default' className="button-shadow">6 Column</Button>
                            <Button onClick={changeCardSize} id="size8" value="18" appearance='default' className="button-shadow">8 Column</Button>
                            <Button onClick={changeCardSize} id="size12" value="24" appearance='default' className="button-shadow" color="orange">12 Column</Button>
                            </ButtonGroup>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                
                <FlexboxGrid className="full-height" justify="center" align="middle">
                    

                        <FlexboxGrid.Item colspan={size}>
                            <Droppable droppableId="added-elements">
                                {(provided) => 
                                <ul className="builder-element-list element-card" {...provided.droppableProps} ref={provided.innerRef}>
                                    {addedElements.map(({id, element, content, apiKey}, index) => {
                                        return(
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => 
                                                    <li className="element" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <AddElement id={id} index={index} content={content} apiKey={apiKey} element={element} />                       
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
        
            <div className="widget-builder-right-side-bar">
                <h4 className="padding-bot-8">Settings</h4>
                <label>Widget name</label>
                <input className="widget-name" onChange={handleName} />
                <label>Widget description</label>
                <textarea className="widget-description" onChange={handleDescription} />
                <label>API Link</label>
                <input className="widget-name" onChange={handleAPI} />
                <label>Header Key</label>
                <textarea className="widget-header widget-description" onChange={handleHeader}>
                   &#123; 
                   "Content-Type":"application/json"
                   &#125;
                    
                </textarea>
                
                {/* 
                    <ButtonGroup justified className="padding-bot-16">
                        <Button appearance='default' color="orange" className="button-shadow">API</Button>
                        <Button appearance='disabled' className="button-shadow">CSS</Button>
                    </ButtonGroup>
                */}
                <Button id="submit-btn" className="button-margin-bot width-100 button-shadow" appearance='ghost' color="orange" onClick={testAPI}>Test API</Button>
                <div>
                    <Tree id="tree" className="tree-selector" onChange={handleTreeSelect} data={APITest} virtualize labelKey="name" valueKey="name"  />
                </div>
                <Button id="submit-btn" className="button-margin-top width-100 button-shadow" appearance='default' color="orange" onClick={onSubmit}>Create widget</Button>
               
            </div>
            </DragDropContext>
        </div>
    )
}
