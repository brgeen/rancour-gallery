import React, { Component } from 'react';
import axios from 'axios';


class GalleryList extends Component {
  componentDidMount() {
    this.galleryList();
  }

  state = {
    galleryList: [],
    imageTextContainer: true,
    imageTextContainerId: 0,
  };

  galleryList() { // we do this outside of render becuase of lifecycle, in render, every change runs render
    // http request to get songs
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          galleryList: response.data,
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      })
  }

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

  render() {
    return (
      <div className="App">
      

        {this.state.galleryList.map(item => (
          <div key={item.id}>
            
            <img src={item.path} alt={item.path} />
            <p>{item.description}</p>
            


            


            <button onClick={() => this.likeButton(item.id)} >Love it!</button>
            <p>Likes: {item.likes}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryList;
