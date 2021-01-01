import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RegisterForm from '../../src/components/form';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
     

          <Route exact path="/" component={RegisterForm} />
          
       
          
          
        </Switch>
      </Router>
    );
  }
}

export default App;
