import React from 'react'
import { Col, Row } from 'react-bootstrap'
import mobile from "../../images/mobile.png";

import delete_icon from "../../images/delete.png";



const CartItem = () => {
  return (
    <div className='mt-2 cart ' >
        <Col sm="12" className='d-flex justify-content-center align-items-center ' >
            <img width="150"  src= {mobile} alt='' />
            <Row className='w-100' >
                <Col  className='d-flex pt-1  justify-content-between ' >
                    <div>الالكترونيات</div>
                    <div className='p-1' >
                         <img width="40" height="40" src={delete_icon} style={{cursor:"pointer"}} alt='delete_icon' />
                     </div>
                </Col>
            <div className="d-flex align-items-center "  >
                <Row>
                    <Col className='d-flex flex-row pb-5 justify-content-start' >
                        <div className='pb-5' > lorem  lorem lorem lorem lorem lorem </div>
                        <div className='pb-5' >4.5</div>
                    </Col>
                </Row>
            <div  >
                <Row>
                    <Col className='d-flex pt-5  ' style={{marginRight:"-240px"}} >
                        <div className='' style={{lineHeight:""}} > الماركة : </div>
                        <div className='' >ابل</div>
                    </Col>
                </Row>
                
                <Row>
                    <Col className='d-flex flex-row pt-2 justify-content-start'  style={{marginRight:"-240px"}} >
                        <div style={{backgroundColor:"red", width:"30px" , height:"30px", borderRadius:"50%"}}  > </div>
                        
                    </Col>
                </Row>
              <div className='d-flex align-items-center justify-content-start ' >
                <Row>
                    <Col className=' d-flex flex-row justify-content-start '>
                        <div>الكمية</div>
                        <div>
                            <input type="number" min="1" style={{width:"50px"}} />
                        </div>
                    </Col>
                </Row>
                </div>
              </div>
            </div>
            </Row>   
           
        </Col>
         
        
        
    </div>
  )
}

export default CartItem
