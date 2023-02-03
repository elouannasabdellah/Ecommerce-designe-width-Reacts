import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem'
import CartCheckout from '../../Components/Cart/CartCheckout'

const CartPage = () => {
  return (

        <div style={{ backgroundColor:"#f9f9f9"}} >
            <Container style={{minHeight:"600px"}}  >
                <Row>
                    <div className='mt-3' style={{fontSize:"20px",fontWeight:"600" }} >عربة التسوق</div>
                </Row>
                <Row className='d-flex justify-content-center' >
                    <Col xs="12" md="9" >
                        <CartItem/>
                        <CartItem/>

                        
                    </Col>
                    <Col xs="6" md="3" >
                        <CartCheckout/>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default CartPage
