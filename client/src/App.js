import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnTap from './Pages/OnTap';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={OnTap} />
              <Route path="/home" component={Home} />
          </Switch>
      </Router>
    );
  }

}

export default App;

