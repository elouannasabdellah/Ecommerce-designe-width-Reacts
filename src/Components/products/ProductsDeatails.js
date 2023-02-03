import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallerie from './ProductGallerie'
import ProductDescription from './ProductDescription'

const ProductsDeatails = () => {
  return (
    <div  >

        <Row className="my-3 pb-3" >
            <Col lg='4' >
                <ProductGallerie/>
            </Col>

            <Col lg="8" >
                <ProductDescription/>
            </Col>
        </Row>
      
    </div>
  )
}

export default ProductsDeatails
