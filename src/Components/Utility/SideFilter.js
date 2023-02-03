import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
  return (

        <div>
            
            <Row>
                <div className='d-flex flex-column ' >

                    <div className='filter_title' >الفئة</div>
                    <div className='d-flex mt-3 ' >
                        <input type="checkbox"  />
                        <div className='filter_sub' > الكل</div>
                    </div>
                    <div className='d-flex mt-3 ' >
                        <input type="checkbox"  />
                        <div className='filter_sub' > اجهزة منزلية</div>
                    </div>
                    <div className='d-flex mt-3 ' >
                        <input type="checkbox"  />
                        <div className='filter_sub' > اجهزة منزلية</div>
                    </div>
                    <div className='d-flex mt-3 ' >
                        <input type="checkbox"  />
                        <div className='filter_sub' > اجهزة منزلية</div>
                    </div>
                    
                </div>
                <div className='d-flex flex-column mt-3' >
                    <div className='filter_title' >الماركة</div>
                    <div className='d-flex mt-3 ' >
                        <input type="checkbox"  />
                        <div className='filter_sub' >  ابل</div>
                    </div>
                    <div className='d-flex mt-3 ' >
                        <input type="checkbox"  />
                        <div className='filter_sub' >  سامسونج</div>
                    </div>

                    <div className='filter_title my-3' >السعر</div>
                    <div className='d-flex' >
                        <p className='filter_sub ' style={{paddingLeft:"5px"}} >من</p>
                        <input type="number" style={{width:"50px", height: "25px" }} min="1" />
                    </div>
                    <div className='d-flex' >
                        <p className='filter_sub ' style={{paddingLeft:"5px"}} >الى</p>
                        <input type="number"  style={{width:"50px", height: "25px"}} min="1"  />
                    </div>

                </div>  

                
            </Row>

        </div>
  )
}

export default SideFilter
