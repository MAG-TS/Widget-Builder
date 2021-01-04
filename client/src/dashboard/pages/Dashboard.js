import React from 'react';
import { Button, Grid, Row, Col, FlexboxGrid } from 'rsuite';

export default function Dashboard() {
    return (
        <div className="show-grid">
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
    )
}
