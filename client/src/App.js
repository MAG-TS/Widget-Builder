import React from "react";
import {
  Switch,
  Route,
  useLocation
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


const App = props => {

  const location = useLocation();

  let route;

  if (location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/register-step-two") {
    route = (
      <React.Fragment>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/register-step-two">
          <RegisterTwo />
        </Route>
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
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/widget-builder">
              <WidgetBuilder />
            </Route>
            <Route path="/departments">
              <Departments />
            </Route>
            <Route path="/co-workers">
              <CoWorkers />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>    
        </div>
      </div>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      { route }
    </React.Fragment>
      
  );
}

export default App;
