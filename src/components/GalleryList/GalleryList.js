import React, { Component } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {

  componentDidMount() {
    this.galleryList();
  }

  state = {
    galleryList: [],
  };

  galleryList() {
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

            <GalleryItem
              galleryItemProps={item}
            />
            <button onClick={() => this.likeButton(item.id)} >Love it!</button>
            <p>Likes: {item.likes}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryList;
