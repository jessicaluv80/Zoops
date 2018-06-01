import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Fun from './Fun.js';
import Addfun from './Addfun.js';
import Morefun from './Morefun.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home </Link>
            <Link to="/Fun"> | Fun </Link>
            <Link to="/Morefun"> | More Fun </Link>
            <Link to="/Addfun"> | Add Fun</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Fun" component={Fun} /> 
            <Route path="/Morefun" component={Morefun} /> 
            <Route path="/Addfun" component={Addfun} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App