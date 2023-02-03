import React from 'react'
import { Col, Row } from 'react-bootstrap';

import ReactStars from "react-rating-stars-component";


const RatePost = () => {

    const setting = {
        size: 22,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
          console.log(`Example 2: new value is ${newValue}`);
        }
      };

  return (

         <div  >
            {/* <ReactStars {...setting} /> */}
            <Row>
                <Col className='my-2 d-flex me-4' >
                    <div className='mt-1  '  style={{fontWeight:"600"}}  >abdellah</div>
                     <div className="me-4" > <ReactStars {...setting} /></div>
                </Col>
            </Row>
            <Row className='d-flex' >
                <Col sm="12" className='me-4 ' >
                    <textarea rows="3" width="90%" className="" placeholder='write a comment' cols="130" >

                    </textarea>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end border-bottom pb-1 " >
                    <div className='py-2 ps-1' style={{backgroundColor:"black", cursor:"pointer", padding:"0px 4px", color:"white", width:"90px",marginLeft:"90px"}} >اضف تعليق</div>
                </Col>
            </Row>
        </div>
  )
}

export default RatePost
