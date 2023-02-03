import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='' style={{minHeight:"500px"}} >
         <Container>

            <Row className=" py-5 d-flex justify-content-center" >
                <Col sm="12"className='d-flex  flex-column' >
                    <label className='mx-auto' style={{fontWeight:"700",fontSize:"20px" }} >تسجيل الدخول</label>
                    <input type="email" placeholder='email...' className=" my-3 text-center mx-auto" style={{width:"30%"}} />
                    <input type="password" placeholder='Password' className=" my-3 text-center mx-auto" style={{width:"30%"}} />
                    <button style={{backgroundColor:"black", color:"#fff",borderRadius:"8px" }} className='mx-auto mt-3 px-5 py-2' >تسجيل الدخول</button>
                    <label  className='mx-auto my-4' >
                    ليس لديك حساب? { ' '}
                        <Link to='/register'  style={{textDecoration:"none"}} >
                            <span style={{cursor:"pointer"}} className='text-danger' >اضغط هنا</span>
                        </Link>
                    </label>
                </Col>
            </Row>

         </Container>
    </div>
  )
}

export default LoginPage
