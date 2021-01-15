import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Grid, Row, Col, FlexboxGrid, Container } from 'rsuite';
import Axios from 'axios';

import { AuthContext } from '../../shared/context/authContext';

const Dashboard = () => {
    const auth = useContext(AuthContext);

    const logoutUser = () => { 
        auth.logout();
        Axios({
            method: "GET",
            withCredentials: true,
            url: "https://widget-builder-ba-project.herokuapp.com/users/logout",
            })
            .catch(err => { throw err });
        }

    return (
        <Container className="container">
           
            <FlexboxGrid justify="space-between" align="top">
                <FlexboxGrid.Item colspan={18}>
                    <h3>My Dashboard</h3>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6} >
                    <FlexboxGrid justify="end">
                        <Button color="orange" appearance="primary" >Edit Dashboard</Button>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <div>
            <Grid fluid>
                <Row gutter={16}>
                    <Col lg={12}>
                        <div className="card">
                            <h1>Widget Card</h1>
                            <Button onClick={logoutUser}>Logout</Button>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="card">
                            <h1>Widget Card</h1>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card">
                            <h1>Widget Card</h1>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card">
                            <h1>Widget Card</h1>
                        </div>
                    </Col>
                </Row>
            </Grid>
            </div>
        </Container>
    )
}

export default Dashboard;
