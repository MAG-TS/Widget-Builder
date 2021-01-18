import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Grid, Row, Col, FlexboxGrid, Container } from 'rsuite';
import Axios from 'axios';

import { AuthContext } from '../../shared/context/authContext';

const Dashboard = () => {

    return (
        <Container className="container">
            <FlexboxGrid justify="space-between" align="top">
                <FlexboxGrid.Item colspan={18}>
                    <h3>My Dashboard</h3>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6} >
                    <FlexboxGrid justify="end">
                        <Button color="orange button-shadow" appearance="primary" >Edit Dashboard</Button>
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
