import React from 'react'
import { Button, Grid, Row, Col, FlexboxGrid, ButtonGroup } from 'rsuite';
import './builder.scss';

export default function WidgetBuilder() {
    return (
        <div className="widget-builder-container">
            <div className="widget-builder-side-bar">
                <h4 className="padding-bot-8">Add Elements</h4>
                <h5 className="padding-bot-16">Typography</h5>
                <Grid fluid>
                    <Row gutter={8} >
                        <Col xs={12}>
                            <div className="builder-element-box">
                                <img src="" />
                                <span>title</span> 
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="builder-element-box">
                                <img src="" />
                                <span>title</span> 
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col xs={12}>
                            <div className="builder-element-box">
                                <img src="" />
                                <span>title</span> 
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="builder-element-box">
                                <img src="" />
                                <span>title</span> 
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="widget-builder-main-column container">
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item>
                            <ButtonGroup>
                            <Button appearance='default' color="orange">4 Column</Button>
                            <Button appearance='default'>6 Column</Button>
                            <Button appearance='default'>8 Column</Button>
                            <Button appearance='default'>12 Column</Button>
                            </ButtonGroup>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid className="full-height" justify="center" align="middle">
                    <FlexboxGrid.Item colspan={6}>
                        <div className="card">Example card text</div>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
            
            <div className="widget-builder-side-bar">
               
                    <ButtonGroup justified>
                        <Button appearance='default' color="orange">API</Button>
                        <Button appearance='default'>CSS</Button>
                    </ButtonGroup>
               
            </div>
        </div>
    )
}
