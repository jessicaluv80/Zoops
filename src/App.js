import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/"> ~    Zoops     ~ </Link>
            <Link to="/   "> ~             ~ </Link>
            <Link to="/    "> ~            ~ </Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/    " component={    } /> */}
            {/* <Route exact path="/ " component={ } /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;