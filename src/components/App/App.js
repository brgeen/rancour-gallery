import React, { Component } from 'react';
import './App.css';

import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  render() {
    return (
      <div className="app">
        <header >
          <h1 >RANCOUR GALLERY</h1>
        </header>

        <GalleryList
        />

      </div>
    );
  }
}

export default App;
