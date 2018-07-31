import React, { Component } from 'react';
import Header from './components/Header';
import Arrows from './components/Arrows';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Everything">
        <Header />
        <Arrows />
        <Footer />
      </div>
    );
  }
}

export default App;
