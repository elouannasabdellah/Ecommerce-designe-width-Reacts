import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import rate from "../../images/rate.png"
import RateItem from '../../Components/Rate/RateItem'
import RatePost from './RatePost'
import Pagination from '../Utility/Pagination'

const RateContainer = () => {
  return (
    <Container className='rate_container pb-2 ' >
        <Row className='' >
            <Col className='d-flex' >
                <div className='p-1' style={{fontWeight:"700"}} >التقييمات</div>
                <img className='mt-2' src={rate} height="18" alt='rate' />
                <div className= ' p-1' >4.3</div>
                <div className= ' p-1 ' >تقييم (160)</div>
            </Col>
        </Row>
        <RatePost/>

        <RateItem/>
        <RateItem/>
        <RateItem/>

        <Pagination/>

    </Container>
  )
}

export default RateContainer
