import React from 'react'
import { Col, Row } from 'react-bootstrap'

import rate from "../../images/rate.png"

const RateItem = () => {
  return (

        <div>

        <Row className="my-2 mx-2" >
            <Col className='d-flex ' >
                <div className='p-1' style={{fontWeight:"600"}}  >Abdellah</div>
                <img className='mt-2' src={rate} height="18" alt='rate' />
                <div className= ' p-1' >4.3</div>
            </Col>
        </Row>
        <Row className="border-bottom pb-1 mx-2" >
            <Col className="d-flex" >
                <div className='rate_description' >
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                </div>
            </Col>
        </Row>

        </div>
  )
}

export default RateItem
