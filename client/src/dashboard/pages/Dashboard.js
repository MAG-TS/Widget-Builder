import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { Button, Grid, Row, Col, FlexboxGrid, Container, Loader, Progress } from 'rsuite';
import Axios from 'axios';

import { AuthContext } from '../../shared/context/authContext';
import { disconnect } from 'mongoose';

const Dashboard = () => {
    const [widgets, setWidgets] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const auth = useContext(AuthContext);
    const editDashboardClicked = () => {
        history.push('/edit-dashboard');
    }

    const RenderWidget = (widget) => {
        let struct = widget.widget.structure;
       // console.log(struct)
        let Rendering = document.createElement("div");
        //console.log(Rendering)
        /*
        var para = document.createElement("p");
        var node = document.createTextNode("This is new.");
        para.appendChild(node);
        */
        let newElement
        for(let i=0; i < struct.length; i++){
            newElement = document.createElement("div");
            Rendering.appendChild(newElement)
        }
        //console.log(Rendering)
        return Rendering.toString()
    }

    const APIRequests = async (request, key) => {
        //console.log(request)
        const resp = Axios.get(request)
        .then((result) => {
            //console.log(result.data[key])
            let data
            if(Array.isArray(result.data[key])){

                //console.log(result.data[key][0])
                data = result.data[key][0].description
            } else if(typeof result.data[key] === "object" && !Array.isArray(result.data[key])){
                //console.log("OBEJCT IDENTIFIED")
                //console.log(result.data[key])
                //console.log(Object.keys(result.data[key]))
                //console.log(Object.keys(Object.keys(result.data[key]))[0]); 
                let innerKey = Object.keys(result.data[key])[0];
                //console.log(innerKey)
                //console.log(result.data[key][innerKey])
                data = result.data[key][innerKey];
            } else {
                data = result.data[key]
            }
           
            return data;
        })
        return resp
    }

    const getWidgets = async () => {
        setLoading(true);
        //console.log(auth.currUser)
        if(auth.currUser){
             Axios.get(`/widgets/my-dashboard-widgets/${auth.currUser.myDashboardWidgets}`)
            .then(async (myWidgets) => {
               
                let result = myWidgets.data.filter(dashboardWidget => dashboardWidget._id === auth.currUser.myDashboardWidgets);
                for(let i=0; i < result[0].widgets.length; i++){
                    if(result[0].widgets[i].api !== undefined){
                        for(let j=0; j < result[0].widgets[i].structure.length; j++){

                            if(result[0].widgets[i].structure[j].apiKey !== null){
                            

                            let data = await APIRequests(result[0].widgets[i].api, result[0].widgets[i].structure[j].apiKey);
                            //console.log(data)
                            result[0].widgets[i].structure[j].content = await APIRequests(result[0].widgets[i].api, result[0].widgets[i].structure[j].apiKey)
                        }
                    }
                        }
                        
                }
               
                //console.log(result)
                
                setWidgets(result[0].widgets);
                setLoading(false);
                
                //Filters out users that are not supposed to be in the list.
                //This needs to be  done because Jira categorizes users and apps as the same thing. (Not sure why)
               
            })
            .catch(err => console.log(err));
        }
       
    }

    useEffect(() => {
        getWidgets();
    }, [])

    return (
        <Container className="container">
            <FlexboxGrid justify="space-between" align="top">
                <FlexboxGrid.Item colspan={18}>
                    <h3>My Dashboard</h3>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6} >
                    <FlexboxGrid justify="end">
                        <Button color="orange button-shadow" appearance="primary" onClick={() => editDashboardClicked()}>Edit Dashboard</Button>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <div>
            <Grid fluid>
                <Row gutter={16}>
                {
                    loading === true ?
                        <div className="position-center">
                            <Loader size="lg" />
                        </div>
                        :
                    widgets.length > 0 ?
                    widgets.map((widget, index) => {
                        return(
                            <Col lg={12}>
                                <div className="card" >
                                    {widget.structure.map((item) => {
                                        if(item.identifier === "Progress-Bar"){
                                            return(
                                                <div className={item.element} id={item.id}>
                                                    <Progress.Line percent={item.content}/>
                                                </div>
                                            )
                                            } else if(item.identifier === "Progress-Circle"){
                                            return(
                                                <div className={item.element} id={item.id}>
                                                    <Progress.Circle percent={item.content} className="circle-max"/>
                                                </div>
                                            )
                                            } else {
                                                return(
                                                    <div className={item.element} id={item.id}>
                                                        {item.content}
                                                    </div>
                                                )
                                            }
                                        
                                        
                                        
                                    })}
                                </div>
                            </Col>
                            )
                        }) : 
                        
                        <div className="no-widget-message">
                            <p className="no-widget-">Click Edit Widgets to add a widget</p>
                        </div>
                            
                    }
                </Row>
            </Grid>
            </div>
        </Container>
    )
}

export default Dashboard;
