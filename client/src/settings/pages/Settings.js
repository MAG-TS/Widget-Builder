import React from 'react';
import { Button, Grid, Row, Col, Input, InputGroup, Icon, Tree } from 'rsuite';
import MondaySvg from '../svgs/MondaySvg';
import JiraSvg from '../svgs/JiraSvg';
import './settings.scss';

export default function Settings() {
    return (
        <div className="show-grid">
            <h3>Settings</h3>
            <Grid fluid>
                <Row gutter={16}>
                    <Col lg={8}>
                        <div className="card">
                            <JiraSvg/>
                            <InputGroup>
                                <InputGroup.Addon> http://</InputGroup.Addon>
                                <Input placeholder="API URL"/>
                            </InputGroup>

                            <h6 className="api-return">API Return</h6>
                            <Tree 
                                defaultExpandAll 
                                placeholder="search" 
                                data={[{
                                    "label": "Jiangxi",
                                    "value": 31,
                                    "children": [
                                    {
                                        "label": "Nanchang",
                                        "value": 303
                                    },
                                    {
                                        "label": "Jiujiang",
                                        "value": 304
                                    },
                                    {
                                        "label": "Jingdezhen",
                                        "value": 305
                                    }
                                    ]
                                }]} 
                                style={{ width: 246 }}
                            />
                            <Button className="button-margin-right settings-btn" color="orange">Save Changes</Button>
                            <Button className="settings-btn" color="orange" appearance="ghost">Remove API</Button>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="card">
                        <MondaySvg/>
                        <InputGroup>
                            <InputGroup.Addon> http://</InputGroup.Addon>
                            <Input placeholder="API URL"/>
                        </InputGroup>

                        <h6 className="api-return">API Return</h6>
                        <Tree 
                            defaultExpandAll 
                            placeholder="search" 
                            data={[{
                                "label": "Jiangxi",
                                "value": 31,
                                "children": [
                                {
                                    "label": "Nanchang",
                                    "value": 303
                                },
                                {
                                    "label": "Jiujiang",
                                    "value": 304
                                },
                                {
                                    "label": "Jingdezhen",
                                    "value": 305
                                }
                                ]
                            }]} 
                            style={{ width: 246 }}/>

                            <Button className="button-margin-right settings-btn" color="orange">Save Changes</Button>
                            <Button className="settings-btn" color="orange" appearance="ghost">Remove API</Button>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="card add-api-card">
                            <h5>Add API</h5>
                            <Icon className="api-icon" icon="plus" size="3x"/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}
