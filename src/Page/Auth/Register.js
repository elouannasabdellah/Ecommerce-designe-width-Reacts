import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    
    <div className='' style={{minHeight:"500px"}} >
    <Container>

       <Row className=" py-5 d-flex justify-content-center" >
           <Col sm="12"className='d-flex  flex-column' >
               <label className='mx-auto' style={{fontWeight:"700",fontSize:"20px" }} > تسجيل حساب جديد </label>
               <input className='mx-auto my-3 text-center ' placeholder="name"  style={{width:"30%"}}  />
               <input type="email" placeholder='email...' className=" my-3 text-center mx-auto" style={{width:"30%"}} />
               <input type="password" placeholder='Password' className=" my-3 text-center mx-auto" style={{width:"30%"}} />
               <button style={{backgroundColor:"black", color:"#fff",borderRadius:"8px" , width:"30%" }} className='mx-auto mt-3 px-5 py-2' > تسجيل الحساب   </button>
               <label  className='mx-auto my-4' >
               لديك حساب بالفعل! { ' '}
                   <Link to='/login'  style={{textDecoration:"none"}} >
                       <span style={{cursor:"pointer"}} className='text-danger' >اضغط هنا</span>
                   </Link>
               </label>
           </Col>
       </Row>

    </Container>
</div>

  )
}

export default Register
