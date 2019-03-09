import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Trade from './pages/Trade/Trade';
import AddCards from './pages/AddCards/AddCards.js';
// import Scan from '';
// import ArView from '';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cards" component={AddCards} exact />
            <Route path="/trade" component={Trade} exact />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
