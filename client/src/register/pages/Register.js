import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Col, Input, Button } from 'rsuite';

import WidgetBuilderSvg from '../../shared/svgs/WidgetBuilderSvg';
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
                    <div className="card">
                        <h4>Welcome to the Widget Builder Registration</h4>
                        <div className="button-margin-top">
                            <label for="username">Username</label>
                            <Input name="username" placeholder="Username" />
                        </div>
                        
                        <div className="button-margin-top">   
                            <label for="password">Password</label>
                            <Input name="password" placeholder="Password" />
                        </div>
                        
                        <div className="button-margin-top">
                            <label for="jobtitle">Job Title (Optional)</label>
                            <Input name="jobtitle" placeholder="Job Title" />
                        </div>
                    
                        <Button 
                            className="submit-button button-margin-top bold" 
                            type="submit"
                            color="orange">
                            Sing up
                        </Button>
                        <Button 
                            className="submit-button button-margin-top bold" 
                            color="orange" 
                            appearance="ghost"
                            onClick={loginClicked}>
                            Log in
                        </Button>
                    </div>
                </Col>
            </Container>

            <footer className="footer">
                <p>Developed by Maria and Tomas 2020</p>
                <p>All rights reserved by Maria and Tomas 2020</p>
            </footer>
        </div>
       
    );
}

export default Register;