import React, { useState, useCallback } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";

import Header from "./shared/components/Header";
import SideNav from './shared/components/SideNav';
import Dashboard from './dashboard/pages/Dashboard';
import WidgetBuilder from './widget-builder/pages/WidgetBuilder';
import Departments from './departments/pages/Departments';
import CoWorkers from './co-workers/pages/CoWorkers';
import Settings from './settings/pages/Settings';
import Register from './register/pages/Register';
import RegisterTwo from './register/pages/RegisterTwo';
import Login from './login/pages/Login';
import 'rsuite/dist/styles/rsuite-default.css';
import './app.scss';

import { AuthContext } from './shared/context/authContext';

import Axios from 'axios';

const App = props => {
  const [loggedIn, setLoggedIn ] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const location = useLocation();
  const history = useHistory();

  // Login
  const login = useCallback((user) => {
    setLoggedIn(true);
    setCurrUser(user);
  }, []);
 
  // Logout
  const logout = () => {
    setLoggedIn(false);
    setCurrUser(null);
    history.push('/login');
  }

  // Get the current user
  const getCurrentUser = () => {
     Axios({
      method: "GET",
      withCredentials: true,
      url: "/users/user",
      })
      .then((user) => {
        if(user.data.email){
          console.log(user.data);
          login(user.data);
          return true;
        }else {
          logout(false);
          return false;
         
        }
      })
      .catch(err => {
      console.log(err);
      return true;
    });
  };

 // Get current user's status
 async function status() {
  let status = false;

  return (loggedIn === false && currUser === null) ? status = await getCurrentUser() :
            (loggedIn === undefined) ? status = false :
              (loggedIn === true) ? status = true :
                status
}

  // Authorization
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      status() ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  );
  
  let route;

  if (location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/register-step-two") {
    route = (
      <React.Fragment>
        <Route path="/login" component={ Login }/>
        <Route path="/register" component={ Register }/>
        <Route path="/register-step-two" component={ RegisterTwo }/>
      </React.Fragment>
    );
  } else{
    route = (
    <React.Fragment>
      <div className="main-container">
       <SideNav className="side-nav"></SideNav>
        <div className="main">
          <Header></Header>
          <Switch>
            <PrivateRoute path="/" exact component={ Dashboard }/>
            <PrivateRoute path="/widget-builder" component={ WidgetBuilder }/>
            <PrivateRoute path="/departments" component={ Departments }/>
            <Route path="/co-workers" component={ CoWorkers }/>
            <Route path="/settings" component={ Settings }/>
          </Switch>    
        </div>
      </div>
    </React.Fragment>
    )
  }

  return (
    <AuthContext.Provider value={{loggedIn: loggedIn, login: login, logout: logout, currUser: currUser}}>
      <React.Fragment>
        { route }
    </React.Fragment>
    </AuthContext.Provider>
  );
}

export default App;
