import React, { Component } from "react";
import Index from "./components/Index";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Admin from './admin/Index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Admin" component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
