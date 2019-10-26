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
      <div onClick={() => this.imageTextContainerClick()} className="imageTextContainer">
      

        

          {this.state.imageTextContainer ? <img src={this.props.galleryItemProps.path} alt={this.props.galleryItemProps.path} /> : <p>{this.props.galleryItemProps.description}</p> }
            
            
            
            


            


            
         
        
      </div>
    );
  }
}

export default GalleryItem;
