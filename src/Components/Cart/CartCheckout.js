import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartCheckout = () => {
  return (
        <div>
            <Row className='my-3' >
                <Col className='d-flex flex-column ' >
                    <div className='d-flex' >
                        <input className="text-center" placeholder='كود الخصم'  />
                        <button style={{backgroundColor:"#000",color:"#fff"}} >تطبيق</button>
                    </div>
                    <div className='border p-2  my-3' style={{fontWeight:'500',width:"96%"}} >3400 Dh</div>
                    <Link to="/order/paymethod" >
                        <button className='p-2' style={{fontWeight:'500',width:"96%", backgroundColor:"#000",color:"#fff"}} >إتمام الشراء</button>
                    </Link>
                </Col>
            </Row>
        </div>
  )
}

export default CartCheckout
