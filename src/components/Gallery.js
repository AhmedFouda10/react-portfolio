import React, { Component } from 'react';
import IMAGES from '../data/images';
import ImageShadow from 'react-image-shadow';
import "react-image-shadow/assets/index.css";

class Gallery extends Component {
    render() {
        return (
            <div>
                {
                    IMAGES.map(imageObject =>{
                        return <Image key={imageObject.id} src={imageObject.image} description={imageObject.description}/>
                    })
                }
            </div>
        );
    }
}

class Image extends Component{
    render(){
        const src =this.props.src;
        const description =this.props.description;
        return(
            <div className='gallery'>
                <a target="_blank" href={src} rel="noreferrer">
                    <ImageShadow src={src} />
                </a>
                <p>{description}</p>
            </div>
        );
    }
}

export default Gallery;