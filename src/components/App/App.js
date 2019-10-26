import React, { Component } from 'react';
import './App.css';

import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  componentDidMount() {
    
  }







  imageTextContainerClick(id) {
    this.setState({
      imageTextContainer: !this.state.imageTextContainer,
      imageTextContainerId: id,
    })

    console.log(this.state.imageTextContainer);
    console.log(this.state.imageTextContainerId);


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />

        <GalleryList 
  
        />
       
      </div>
    );
  }
}

export default App;
