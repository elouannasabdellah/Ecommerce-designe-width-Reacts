import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ChoosePayMethod = () => {
  return (

        <div>
            <div className='mt-5 pb-2 pe-1 ' style={{fontWeight:"600",width:"160px" ,fontSize:"20px", borderBottom:"2px solid lime"}} >إختر طريقة الدفع</div>
            <div className=' check my-3 pt-2 px-3' >
                <Row>
                    <Col xs='12' className="my-4 d-flex " >
                        <input value="الدفع عن طريق الفيزا" id="group1" name="group" type="radio" className='' />
                        <label className='mx-2' for="group1" style={{fontWeight:"500"}} >الدفع عن طريق الفيزا</label>
                    </Col>
                </Row>

                <Row>
                    <Col xs='12' className=" mt-2 d-flex pb-3" >
                        <input value="الدفع عند الإستلام" id="group2" name="group" type="radio" className='' />
                        <label className='mx-2' for="group2"  style={{fontWeight:"500"}} > الدفع عند الإستلام </label>
                    </Col>
                </Row>
            </div>

            <div>
                <Row>
                    <Col  className='d-flex justify-content-end' >
                        <div className="p-2 pay"  style={{backgroundColor:"white" ,borderRadius:"5px" }}  >3000 د.م</div>
                        <div className='me-3 p-2' style={{backgroundColor:"black" ,borderRadius:"5px" ,color:"#fff" }} >إتمام الشراء</div>
                    </Col>
                </Row>
            </div>
        </div>
  )
}

export default ChoosePayMethod
