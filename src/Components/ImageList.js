import React from 'react';
import './ImageList.css'; 
import ImageCard from './ImageCard'

const ImageList =(props) => {

    const images = props.images.map(({id, urls, description}) =>{
        return <ImageCard alt={description} key = {id} src={urls.regular}/>
    })

    return (
        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList;