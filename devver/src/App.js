import React, { Component } from 'react';
import Header from './Header/Header';
import Arrows from './Arrows/Arrows';
import Footer from './Footer/Footer';

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
