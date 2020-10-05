import React, { Component } from "react";
import Index from "./components/Index";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Admin from './admin/Index';
import Dashboard from './admin/Dashboard';
import DashboardMain from './admin/DashboardMain';
import Account from './admin/Account';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import ProtectedRoute from "./admin/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/admin" component={Admin} />
          <ProtectedRoute
            exact
            path="/admin/dashboard"
            component={Dashboard}
          />
          <ProtectedRoute
            exact
            path="/admin/account"
            component={Account}
          />
          <ProtectedRoute 
            exact 
            path="/admin/dashboardmain" 
            component={DashboardMain} 
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
