import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Redirect, Link } from "react-router-dom";
import { Button, Grid, Row, Col, FlexboxGrid, Container } from 'rsuite';
import Axios from 'axios';

import { AuthContext } from '../../shared/context/authContext';

const EditDashboard = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    
    const [widgets, setWidgets] = useState(null);
    const [selectedWidget, setSelectedWidget] = useState(null);
    const [selectedWidgetObj, setSelectedWidgetObj] = useState(null);
    const [active, setActive] = useState(false);
    const [dashboardWidgets, setDashboardWidgets] = useState(null);

    // GET available widgets
    const getWidgets = () => {
        Axios({
        method: "GET",
        withCredentials: true,
        url: "/widgets/",
        })
        .then((widgets) => {
            setWidgets(widgets.data);
        })
        .catch(err => { throw err });
    };

    useEffect(() => {
        getWidgets();
    },[]);

    // onClick => Widget Selected
    const widgetSelected = (widget) => {
        setSelectedWidgetObj(widget);
        
        if (active){
            document.getElementById(active).classList.remove('orange-border');
        }
        
        setActive(widget._id);
        document.getElementById(widget._id).classList.add('orange-border');
        
        if (widget) {
            setSelectedWidget (
                <Row gutter={16}>
                    <Col lg={12}>
                        <div className="card orange-border">
                            <h3>{widget.name}</h3>
                        </div>
                    </Col>
                </Row>
            )
        }
    }

    // PUT  - Add widget to MyWidgetsDashboard
    const addWidget = () => {
        Axios({
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                myDashboardWidgetId: auth.currUser.myDashboardWidgets,
                selectedWidgetObj
            },
            withCredentials: true,
            url: "/widgets/update-myDashboardWidget",
        })
        .then((res) => {
            console.log(res);
        })
        .catch(err => { throw err });
    }

    // GET - Get current users dashboard widgets
    const getMyDashboardWidgets = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: `/widgets/my-dashboard-widgets/${auth.currUser.myDashboardWidgets}`
        })
        .then((myDashboardWidgets) => {
            let currDashboard = myDashboardWidgets.data.filter(dashboardWidget => dashboardWidget._id === auth.currUser.myDashboardWidgets);
            setDashboardWidgets(currDashboard[0].dashboardWidgets);
        })
        .catch(err => { throw err });
    }

    return (
        <div className="main-container">
            <Container className="container">
                <FlexboxGrid justify="space-between" align="top">
                    <FlexboxGrid.Item colspan={18}>
                        <h3>Edit Dashboard</h3>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6} >
                        <FlexboxGrid justify="end">
                            <Link to="/">
                                <Button className="button-shadow" color="orange" appearance="ghost">Finish Editing</Button>
                            </Link>
                            
                        </FlexboxGrid>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <div>
                    <Grid fluid>
                        <Row gutter={16}>
                            <Col lg={12}>
                                <div className="card">
                                    <h1>Widget Card</h1>
                                </div>
                            </Col>
                        </Row>
                        {selectedWidget}
                    </Grid>
                </div>
            </Container>

            <div className="widget-builder-side-bar">
                <h4>Available Widgets</h4>
                {
                    widgets !== null ? widgets.map((widget, index) => {

                        return (
                            <div onClick={() => widgetSelected(widget)} id={widget._id} className="gray-card button-shadow">
                                <h6>{widget.name}</h6>
                                <p>{widget.description}</p>
                            </div>
                        )
                    }) : null
                }
                <Button 
                    color="orange" 
                    className="button-shadow full-width button-margin-top"
                    onClick={() => addWidget()}>Add Widget</Button>
                <Link to="/">
                    <Button className="button-shadow full-width button-margin-top" color="orange" appearance="ghost">Finish Editing</Button>
                </Link>
                 {/*<Button 
                    color="orange" 
                    className="button-shadow full-width button-margin-top"
                    onClick={() => getMyDashboardWidgets()}>Get My Dashboard Widgets</Button>
                 */}
            </div>
        </div>
    )
}

export default EditDashboard;
