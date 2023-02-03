
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter'
import CardProductsContainer from '../../Components/products/CardProductsContainer'
import Pagination from '../../Components/Utility/Pagination'

const ShopProductsPage = () => {
  return (
    <div style={{minHeight:"600px", backgroundColor:"#f9f9f9" }} >
        <CategoryHeader/>

        <Container style={{backgroundColor:"#f9f9f9"}} >
             <SearchCountResult title="400 نتيجة بحث" />

             <Row className='d-flex' >

                <Col sm="2" xs="2"  md="1" >
                  <SideFilter/>
                </Col>

                <Col sm="10" xs="10" md="11" >
                    <CardProductsContainer/>
                </Col>

             </Row>

             <Pagination/>
             
        </Container>
    </div>
  )
}

export default ShopProductsPage
