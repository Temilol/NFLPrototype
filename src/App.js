import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home.js';
// import Splash from '';
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

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
