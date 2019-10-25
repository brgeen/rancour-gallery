import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {

    this.galleryList();
  }

  state = {
    galleryList: [],
  };

  galleryList() { // we do this outside of render becuase of lifecycle, in render, every change runs render
    // http request to get songs
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
            galleryList: response.data
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
      
  
        <div>{this.state.galleryList.map(item => (
          <>
          
          <img src={item.path} />
          <p>{item.description}</p>
          <button key={item.id}>Love it!</button>
          <p>Likes: {item.likes}</p>
          </>
        ))}</div>
      </div>
    );
  }
}

export default App;
