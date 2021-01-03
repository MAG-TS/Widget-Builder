import Header from "./shared/components/Header";
import SideNav from './shared/components/SideNav';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './dashboard/pages/Dashboard';
import WidgetBuilder from './widget-builder/pages/WidgetBuilder';
import Departments from './departments/pages/Departments';
import CoWorkers from './co-workers/pages/CoWorkers';
import Settings from './settings/pages/Settings';
import 'rsuite/dist/styles/rsuite-default.css';
import './app.scss';
import { Container } from 'rsuite';


function App() {
  return (
    <Router>
      <div className="main-container">
        <SideNav className="side-nav"></SideNav>

        <div className="main">
          <Header></Header>

        <Container className="container">
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
       
        </Container>      
        </div>
      </div>
    </Router>
  );
}

export default App;
