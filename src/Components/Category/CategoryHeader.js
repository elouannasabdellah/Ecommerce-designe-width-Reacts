import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
      <div className='cat-header' >
          <Container>
              <Row>
                  <Col className='d-flex justify-centent-start py-3 flex-wrap' >

                      <div className='cart-text-header' >الكل</div>
                      <div  className='cart-text-header'>الالكترونيات</div>
                      <div  className='cart-text-header'>ملابس</div>
                      <div  className='cart-text-header'>كهرباء</div>
                      <div  className='cart-text-header'>تخفيضات</div>
                      <div className='cart-text-header'>تخفيضات</div>
                      <div className='cart-text-header'>تخفيضات</div>
                      <div className='cart-text-header'>تخفيضات</div>
                      <div className='cart-text-header'>تخفيضات</div>
                      <div  className='cart-text-header'>المزيد</div>

                  </Col>
              </Row>
          </Container>
      </div>
  )
}

export default CategoryHeader
