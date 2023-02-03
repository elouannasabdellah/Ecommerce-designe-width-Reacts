import React from 'react'

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';

import mobile from "../../images/mobile.png"
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallerie = () => {

    const images = [
        {
          original: `${mobile}`,
          
        },
        {
          original: `${mobile}`,
         
        },
        {
          original: `${mobile}`,
          
        },
      ];

  return (
    // react-image-gallery librairie
    <div className=' product_gallery_card d-flex justify-content-center pb-3 pt-3 align-items-center ' >
       
        <ImageGallery items={images}
        defaultImage={ mobile}
        showFullscreenButton= {false}
        isRTL={false}
        showPlayButton={false}
        showThumbnails={true}
        renderLeftNav= { LeftButton }
        renderRightNav={ RightButton }

         />

    </div>
  )
}

export default ProductGallerie
