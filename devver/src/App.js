import React, { Component } from 'react';
import Header from './Header/Header';
import IntPrep from './1IntPrep/IntPrep';
import Algo from './2Algo/Algo';
import Footer from './Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Everything">
        <Header />
        <IntPrep />
        <Algo />
        <Footer />
      </div>
    );
  }
}

export default App;
