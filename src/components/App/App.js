import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    this.galleryList();
  }

  state = {
    galleryList: [],
    imageTextContainer: true,
  };

  likeButton(imageIdForLike) {
    console.log('clicked');

    axios({
      method: 'PUT',
      url: `/gallery/like/${imageIdForLike}`,
    })
      .then((response) => {
        this.galleryList();
      })
      .catch((error) => {
        console.log('error on GET', error);
      })
  }

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

  imageTextContainerClick(id) {
    this.setState({
      imageTextContainer: !this.state.imageTextContainer,
    })

    console.log(this.state.imageTextContainer);
    console.log(id);


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />


        {this.state.galleryList.map(item => (
          <div key={item.id}>
            <div
            onClick={() => this.imageTextContainerClick(item.id)}
            className="imageTextContainer">
              {this.state.imageTextContainer ? <img src={item.path} alt={item.path} /> : <p>{item.description}</p> }



            </div>
            
            
            <button onClick={() => this.likeButton(item.id)} >Love it!</button>
            <p>Likes: {item.likes}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
