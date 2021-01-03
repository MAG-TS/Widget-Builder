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
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/widger-builder">Widget Builder</Link>
            </li>
            <li>
              <Link to="/users">Departments</Link>
            </li>
            <li>
              <Link to="/co-workers">Co-Workers</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
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
