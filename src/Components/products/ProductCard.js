import React from 'react'
import { Card, Col } from 'react-bootstrap';
import laptob from "../../images/labtop.png"
import rate from "../../images/rate.png"
import favOff from "../../images/fav-off.png"
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (

    <Col lg="3" md="4" sm="6" xs="6" className='d-flex pt-2' >
      
      <Card className='text-center' style={{ width: "100%", height:"300px" ,border:"none",borderRadius:"8px",  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px "   }}>
      
      <Link to="/products/:id" style={{textDecoration:"none"}} >
        <Card.Img variant="top" src={ laptob } />
      </Link>
        <div className='d-flex justify-content-end '  >
            <img src= {favOff} alt="" style={{width:"25px",height:"24px"}} />
        </div>
      <Card.Body>
        <Card.Title>
            <div className='card_title' >laptop </div>
        </Card.Title>

        <Card.Text>
            <div className="d-flex justify-content-between " > 

                <div className='d-flex' >
                    <img src={rate} alt="produit" className='mt-1' height="16" width="16" />
                    <div className='card-rate mx-2' style={{color:"yellow", fontWeight:"600"}} >4.5</div>
                </div>
                <div className='d-flex' >
                    <div className='card_price fs'>10.000</div>
                    <div className='card_current mx-1'  >درهم</div>
                </div>
             </div> 
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    </Col>
  )
}

export default ProductCard;
