import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Col, Input, Button, SelectPicker, Divider } from 'rsuite';

import WidgetBuilderSvg from '../../shared/svgs/WidgetBuilderSvg';
import JiraSvg from '../../shared/svgs/JiraSvg';
import MondaySvg from '../../shared/svgs/MondaySvg';
import './register.scss';

const Register = props =>  {
    
    const history = useHistory();

    const loginClicked = () => {
        history.push('/login');
    }


    return (
        <div className="register-container">
            <Container className="container content">
                <span className="center">
                    <WidgetBuilderSvg/>
                </span>

                <Col lg={6} className="center">
                    <div className="card card-register">
                        <h4>Connect to your task management application</h4>
                        <div className="button-margin-top">
                            <JiraSvg/>
                            <SelectPicker 
                                data={[{
                                    "label": "Jiangxi",
                                    "value": 31,
                                    }]}  
                                style={{ width: "100%" }} />
                        </div>

                        <Divider>or</Divider>
                        
                        <div className="divider-margin-top">   
                            <MondaySvg/>
                            <SelectPicker 
                                data={[{
                                    "label": "Jiangxi",
                                    "value": 31
                                    }]}  
                                style={{ width: "100%" }} />
                        </div>

                        <Divider>or</Divider>
                        
                        <div className="divider-margin-top">
                            <label for="firsname">First Name</label>
                            <Input name="firstname" placeholder="First Name" />
                        </div>

                        <div className="divider-margin-top">
                            <label for="lastname">Last Name</label>
                            <Input name="lastname" placeholder="Last Name" />
                        </div>
                    
                        <Button 
                            className="submit-button button-margin-top bold button-shadow" 
                            type="submit" 
                            color="orange">
                            Sing up
                        </Button>
                        <Button 
                            className="submit-button divider-margin-top bold button-shadow" 
                            color="orange"
                            onClick={loginClicked}
                            appearance="ghost">
                            Log in
                        </Button>
                    </div>
                </Col>
            </Container>

            <footer className="footer">
                <p>Developed by Maria and Tomas 2021</p>
                <p>All rights reserved by Maria and Tomas  2021</p>
            </footer>
        </div>
       
    );
}

export default Register;