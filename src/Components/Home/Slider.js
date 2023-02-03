import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from "../../images/slider1.png"
import slide4 from "../../images/slider4.png"
import prod4 from "../../images/prod4.png"

const Slider = () => {
  return (
    <Carousel >
        <Carousel.Item  className='slider-background' interval={2000} >
          <div className='d-flex flex-row justify-content-center align-items-center' >
                <img
                    style={{height:"300px" , width:"310px", objectFit:"cover"}}
                    className="px-2"
                    src= {slide1}
                    alt="First slide"
                  />
                
                  <div>
                      
                    <h3 className='slider_title' >هناك خصم</h3>
                      <p className='slider_text' >خصم يصل الى 50 % </p>
                   
                  </div>
                
          </div>
         
         
        </Carousel.Item>

        <Carousel.Item  className='slider-background2'  interval={2000} >
          <div className='d-flex flex-row justify-content-center align-items-center' >
                <img
                    style={{height:"300px" , width:"310px", objectFit:"cover"}}
                    className=""
                    src= {slide4}
                    alt="First slide"
                  />
                
                  <div>
                      
                     <h3 className='slider_title' >هناك خصم</h3>
                      <p className='slider_text' >خصم يصل الى 50 % </p>
                   
                  </div>
                
          </div>
         
         
        </Carousel.Item>

     
        <Carousel.Item  className='slider-background3'  interval={2000} >
          <div className='d-flex flex-row justify-content-center align-items-center' >
                <img
                    style={{height:"300px" , width:"310px", objectFit:"contain"}}
                    className=""
                    src= {prod4}
                    alt="First slide"
                  />
                
                  <div>
                      
                      <h3 className='slider_title' >هناك خصم</h3>
                      <p className='slider_text' >خصم يصل الى 50 % </p>
                   
                  </div>
                
          </div>
         
         
        </Carousel.Item>
  </Carousel>
  )
}

export default Slider
