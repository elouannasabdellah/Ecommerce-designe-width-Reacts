import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import phone from "../../images/phone.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"

const Footer = () => {
  return (

    <div className="my-2" style={{backgroundColor: "#000",color:"#fff" }} >
      
        <Container>
            <Row className='d-flex justify-content-between' >
                <Col sm="6" className="d-flex align-items-center " >
                    <div> الشروط والاحكام</div>
                    <div className='mx-2'  > سياسة الخصوصية  </div>
                    <div className='mx-2'   > اتصل بنا </div>
                </Col>
                <Col sm="6" className="d-flex justify-content-end align-items-center " >
                    <div className='d-flex mx-3 pt-2' > 
                        <img src={phone} alt='phone' height="30" />
                        <p style={{direction:"ltr"}} >+2126 88767969</p>
                     </div>
                     <div style={{cursor:'pointer'}} > 
                        <img width="28" src= {facebook} alt='' />
                       
                     </div>
                     <div style={{cursor:'pointer'}} > 
                        <img width="28" src={instagram} alt='' />
                       
                     </div>
                     <div style={{cursor:'pointer'}} > 
                        <img width="28" src= {twitter} alt='' />
                       
                     </div>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Footer
