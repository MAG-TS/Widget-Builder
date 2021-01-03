import Header from "./shared/components/Header";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './dashboard/pages/Dashboard';
import WidgetBuilder from './widget-builder/pages/WidgetBuilder';
import Departments from './departments/pages/Departments';
import CoWorkers from './co-workers/pages/CoWorkers';
import Settings from './settings/pages/Settings';


function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/widget-builder">Widget Builder</Link>
            </li>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/co-workers">Co-Workers</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>


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
    </Router>
  );
}

export default App;
