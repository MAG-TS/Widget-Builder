import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Col, Input, Button } from 'rsuite';

import WidgetBuilderSvg from '../../shared/svgs/WidgetBuilderSvg';
import '../../register/pages/register.scss';

const Login = props =>  {

    const history = useHistory();

    const registerClicked = () => {
        history.push('/register');
    }

    return (
        <div className="register-container">
            <Container className="container content">
                <span className="center">
                    <WidgetBuilderSvg/>
                </span>

                <Col lg={6} className="center">
                    <div className="card">
                        <h4>Log in</h4>
                        <div className="button-margin-top">
                            <label for="username">Username</label>
                            <Input name="username" placeholder="Username" />
                        </div>
                        
                        <div className="button-margin-top">   
                            <label for="password">Password</label>
                            <Input name="password" placeholder="Password" />
                        </div>
                    
                        <Button 
                            className="submit-button button-margin-top bold" 
                            type="submit" 
                            color="orange">
                            Log in
                        </Button>
                        <Button 
                            className="submit-button divider-margin-top bold" 
                            onClick={registerClicked}
                            color="orange" 
                            appearance="ghost">
                            Sign up
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

export default Login;