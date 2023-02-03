import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ProductDescription = () => {
  return (
    <div className='px-3 ' >

        <Row>
            <div className='cat_title mt-3 ' >الالكترونيات</div>  
        </Row>
        <Row>
            <Col>
                <div className='cat_text  ' >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                <div className='px-3 ' style={{color:"gold",fontWeight:"700"}} > 4.5 </div>
                </div>

            </Col>
        </Row>
        <Row>
            <Col className='mt-4 d-flex ' >
                <div className='cat_title' >   الماركة :</div>
                <div className='cat_title_categ px-3 '  >سامسونج</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2 d-flex ' >
                <div className='color ms-2 border ' style={{backgroundColor: "#E52C2C"}} ></div>
                <div className='color  ms-2 border '  style={{backgroundColor: "white"}}></div>
                <div className='color  ms-2 border ' style={{backgroundColor: "black"}}></div>
            </Col>
        </Row>
        <Row className="mt-4 pt1" >
            <div className='cat_title' >المواصفات</div>
        </Row>
        <Row>
            <Col>
                <div className='product_des pt-2' >t is a long established fact that a reader will be distracted by the
                 readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                as opposed to using 'Content here, content here', making it look like readable English.</div>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex mt-3 ' >
                <div className='product_price' >3000 د.م </div>
                <div className='product_cart' > اضف للعربة</div>
            </Col>
        </Row>

    </div>
  )
}

export default ProductDescription
