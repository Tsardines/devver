import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './Header/Header';
import IntPrep from './1IntPrep/IntPrep.js';
import Algo from './2Algo/Algo';
import Home from './3Home/Home';
import Footer from './Footer/Footer';
import Error from './Error/Error';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/interview-prep" component={IntPrep} />
            <Route path="/algorithm-practice" component={Algo} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
    );
  }
}

export default App;
