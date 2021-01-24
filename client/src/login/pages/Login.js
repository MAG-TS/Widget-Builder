import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Col, Input, Button } from 'rsuite';
import Axios from 'axios';

import WidgetBuilderSvg from '../../shared/svgs/WidgetBuilderSvg';
import '../../register/pages/register.scss';


const Login = props =>  {
    const history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm();


    const registerClicked = () => {
        history.push('/register');
    }

    const onSubmit = (data) => {
        Axios({
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: data.email,
                password: data.password
            },
            withCredentials: true,
            url: "/users/login",
            })
            .then((res) => {
                history.push('/');
            });
    }

    return (
        <div className="register-container">
            <Container className="container content">
                <span className="center">
                    <WidgetBuilderSvg/>
                </span>

                <Col lg={6} className="center">
                    <div className="card">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4>Log in</h4>
                            <div className="button-margin-top">
                                <label for="email">Email</label>
                                <input name="email" type="text" ref={register({ required: true, maxLength: 20 })} placeholder="Email" />
                                {errors.email && <span className="error">This field is required</span>}
                            </div>
                            
                            <div className="button-margin-top">   
                                <label for="password">Password</label>
                                <input name="password" type="password" placeholder="Password" ref={register({ required: true, minLength: 6 })} />
                                {errors.password && <span className="error">This field is required</span>}
                            </div>
                        
                            <Button 
                                className="submit-button button-margin-top bold button-shadow" 
                                type="submit" 
                                color="orange">
                                Log in
                            </Button>
                            <Button 
                                className="submit-button divider-margin-top bold button-shadow" 
                                onClick={registerClicked}
                                color="orange" 
                                appearance="ghost">
                                Sign up
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

export default Login;