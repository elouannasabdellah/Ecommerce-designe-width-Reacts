import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/products/CardProductsContainer'
import ProductsDeatails from '../../Components/products/ProductsDeatails'
import RateContainer from '../../Components/Rate/RateContainer'


const ProductDetailsPage = () => {
  return (
    <div style={{minHeight: "600px"}} >
        <CategoryHeader />

        <Container>
            <ProductsDeatails/>

            <RateContainer/>

            <CardProductsContainer title="منتجات قد تعجبك" />

        </Container>
    </div>
  )
}

export default ProductDetailsPage
