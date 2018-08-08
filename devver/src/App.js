import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './Header/Header';
import IntPrep from './1IntPrep/IntPrep.js';
import Algo from './2Algo/Algo';
import Home from './3Home/Home';
import Jobs from './4Jobs/Jobs';
import Forums from './5Forums/Forums';
import Footer from './Footer/Footer';
import Error from './Error/Error';

import './App.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/interview-prep" component={IntPrep} />
                <Route path="/algorithm-practice" component={Algo} />
                <Route path="/job-boards" component={Jobs} />
                <Route path="/news-and-forums" component={Forums} />
                <Route component={Error} />
              </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
