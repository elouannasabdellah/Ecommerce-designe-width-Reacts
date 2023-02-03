import React from 'react'
import { Container, Form, Nav, Navbar } from "react-bootstrap"

import login from '../../images/login.png'
import cart from '../../images/cart.png';
import logo from "../../images/logo.png"




const NavbarLogin = () => {
  return (

    <Navbar bg="dark" variant ="dark" expand="lg">
    <Container >
      <Navbar.Brand>
        <a href='/' >

        <img src={logo} alt="logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        
       
          <Form.Control
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          
      
        <Nav className='me-auto' >
        <Nav.Link href="/login" className='nav-text mt-3 d-flex justify-content-center' >

          <img src={login} style={{width:"30px",height:"30px"}} className="login-img" alt="logo" />
        
          <p style={{color:"white"}} >  دخول </p> 
        
        </Nav.Link>
        <Nav.Link className='nav-text mt-3 d-flex justify-content-center' href="/cart">
         
          <img src={cart} style={{width:"30px",height:"30px"}} className="login-img" alt="logo" />
          <p style={{color:"white"}}  >العربة</p>
        
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavbarLogin
