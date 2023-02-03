import React from 'react'
import { Container, Row } from 'react-bootstrap'

import SubTitle from '../Utility/SubTitle'
import ProductCard from './ProductCard'

const CardProductsContainer = ({title, btntitle ,pathText}) => {
  return (

 
          <Container className='my-3 py-1'  >
            <SubTitle title= {title} btntitle= {btntitle} pathText= {pathText} />
            <Row className='my-3 '  >

            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            
            </Row>
        </Container>
    
  )
}

export default CardProductsContainer
