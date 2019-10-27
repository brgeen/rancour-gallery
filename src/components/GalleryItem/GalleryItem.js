import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        imageTextContainer: true,
    };

    imageTextContainerClick() {
        this.setState({
            imageTextContainer: !this.state.imageTextContainer,
        })
    }

    render() {
        return (
            <div onClick={() => this.imageTextContainerClick()} className="imageAndTextContainer">

                {this.state.imageTextContainer ? // single ternary split up on multiple lines
                    <img src={this.props.galleryItemProps.path} alt={this.props.galleryItemProps.path} /> :
                    <div>{this.props.galleryItemProps.description.map(element => ( // mapping the description object to the DOM
                        <div key={this.props.galleryItemProps.id} className="galleryItemDescriptionContainer">
                            <p>{element.artist}</p>
                            <p>{element.title}</p>
                            <p>{element.dimensions}</p>
                            <p>{element.media}</p>
                           </div>
                    ))}</div>}

            </div>
        );
    }
}

export default GalleryItem;
