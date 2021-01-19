import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Container, Col, Input, Button, SelectPicker, Divider } from 'rsuite';
import { AuthContext } from '../../shared/context/authContext';
import WidgetBuilderSvg from '../../shared/svgs/WidgetBuilderSvg';
import JiraSvg from '../../shared/svgs/JiraSvg';
import MondaySvg from '../../shared/svgs/MondaySvg';
import './register.scss';

const Register = props =>  {
    
    const [jiraUsers, setJiraUsers] = useState([]);
    const [selectedJiraAccount, setSelectedJiraAccount] = useState(null);
    const [name, setName] = useState(null);
    const history = useHistory();
    const auth = useContext(AuthContext);
    const loginClicked = () => {
        history.push('/login');
    }

    const getAllJiraUsers = () => {
        axios.get('/users/register-step-two/get-all-jira-users')
            .then((coWorkers) => {
               
                //Filters out users that are not supposed to be in the list.
                //This needs to be  done because Jira categorizes users and apps as the same thing. (Not sure why)
                let filteredCoWorkers = coWorkers.data.filter(person => person.accountType === "atlassian");
                console.log(filteredCoWorkers);
                setJiraUsers(filteredCoWorkers);
            })
            .catch(err => console.log(err));
    
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(auth.currUser.email);
        axios({
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: auth.currUser.email,
                jiraId: selectedJiraAccount,
                name: name
            },
            withCredentials: true,
            url: "/users/register-step-two/link-jira-account",
            }).then((res) => {
                console.log(res)
                history.push('/')
            });
    }

    const selectUser = (id, userData) => {
        console.log(id);
        setSelectedJiraAccount(id);
        setName(userData.displayName);
    }

    useEffect(() => {
        getAllJiraUsers()
    }, [])

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
                                onSelect={selectUser}
                                data={jiraUsers}  
                                labelKey="displayName"
                                valueKey="accountId"
                                style={{ width: "100%" }} />
                        </div>
                         {/* 
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
                        */}
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
                            onClick={onSubmit}
                            className="submit-button button-margin-top bold button-shadow" 
                            color="orange">
                            Link Jira Account
                        </Button>
                        <Button 
                            className="submit-button divider-margin-top bold button-shadow" 
                            color="orange"
                            onClick={loginClicked}
                            appearance="ghost">
                            Skip
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