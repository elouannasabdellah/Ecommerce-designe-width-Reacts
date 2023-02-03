import React from 'react'
import { Col } from 'react-bootstrap';

const CategoryCard = ({background , img ,title}) => {
  return (

        <Col lg="2" md="4" sm="6" xs="6" className='my-4 mt-5 d-flex jutify-content-around' >

            <div className='allCard mb-3 text-center' >
                <div className='category_card py-3' style={{backgroundColor:`${background}`,borderRadius:"50%" }} >
                <img src={img} style={{width:"150px",height:"110px"}} alt='category_img' className='category_card_img' /></div> {"  "}
                <p className='category_card_text my-2' > {title} </p>
            </div>

        </Col>

  )
}

export default CategoryCard;
