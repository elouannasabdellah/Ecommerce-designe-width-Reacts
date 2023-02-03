import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import laptops from "../../images/laptops.png"

const DiscountSection = () => {
  return (
    
        <Container>
            <Row className=' my-3 d-flex text-center align-items-center' style={{backgroundColor:"#808080",borderRadius:'8px' }}  >
                <Col sm="6" >
                    <div style={{color:"#fff",fontSize:"20px",fontWeight:"500"}} >خصم يصل الى 30% على اجهزة الحاسوب</div>
                </Col>

                <Col sm="6" >
                    <div  >
                        <img style={{width:"280px"}} src= {laptops} alt='discount img laptops' />
                    </div>
                </Col>
            </Row>
        </Container>

  )
}

export default DiscountSection
