import React, { Component } from "react";
import Index from "./components/Index";
import About from "./components/About";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/About" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
