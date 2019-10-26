import React, { Component } from 'react';



class GalleryItem extends Component {

    imageTextContainerClick(id) {
        this.setState({
          imageTextContainer: !this.state.imageTextContainer,
          imageTextContainerId: id,
        })
    
        console.log(this.state.imageTextContainer);
        console.log(this.state.imageTextContainerId);
    
    
      }
 

  state = {
    imageTextContainer: true,
  };

  


  render() {
    return (
      <div className="imageTextContainer">
      

        

          
            
            <img src={this.props.galleryItemProps.path} alt={this.props.galleryItemProps.path} />
            <p>{this.props.galleryItemProps.description}</p>
            


            


            
         
        
      </div>
    );
  }
}

export default GalleryItem;
