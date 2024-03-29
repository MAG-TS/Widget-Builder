import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Col, Input, Button } from 'rsuite';
import Axios from 'axios';

import WidgetBuilderSvg from '../../shared/svgs/WidgetBuilderSvg';
import './register.scss';

const Register = props =>  {

    const history = useHistory();

    const loginClicked = () => {
        history.push('/login');
    }

    const onSubmit = (event) => {
        event.preventDefault();

        Axios({
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: event.target.email.value,
                password: event.target.password.value,
                jobTitle: event.target.jobTitle.value
            },
            withCredentials: true,
            url: "/users/register",
            }).then((res) => history.push('/login'));
    }

    return (
        <div className="register-container">
            <Container className="container content">
                <span className="center">
                    <WidgetBuilderSvg/>
                </span>

                <Col lg={6} className="center">
                    <div className="card">
                        <form onSubmit={onSubmit}>
                            <h4>Welcome to the Widget Builder Registration</h4>
                        
                            <div className="button-margin-top">
                                <label for="email">Email</label>
                                <Input name="email" placeholder="Email" />
                            </div>
                            
                            <div className="button-margin-top">   
                                <label for="password">Password</label>
                                <Input name="password" placeholder="Password" type="password"/>
                            </div>
                            
                            <div className="button-margin-top">
                                <label for="jobTitle">Job Title (Optional)</label>
                                <Input name="jobTitle" placeholder="Job Title" />
                            </div>
                        
                            <Button 
                                className="submit-button button-margin-top bold button-shadow" 
                                type="submit"
                                color="orange">
                                Sing up
                            </Button>
                            <Button 
                                className="submit-button button-margin-top bold button-shadow" 
                                color="orange" 
                                appearance="ghost"
                                onClick={loginClicked}>
                                Log in
                            </Button>
                        </form>  
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