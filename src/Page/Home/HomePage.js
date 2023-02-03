import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeature from '../../Components/Brand/BrandFeature'


const HomePage = () => {
  return (
    <div style={{minHeight:"670px" }} >
        {/* <NavbarLogin/> */}
        <Slider/>
        <HomeCategory />

        <CardProductsContainer title='الاكثر مبيعا' btntitle="المزيد" pathText="/products" />

        <DiscountSection/> 

        <CardProductsContainer title='احدث المنتوجات' btntitle="المزيد" pathText="/products" />
        <BrandFeature title="اشهر الماركات" btntitle="المزيد" />

        {/* <Footer/> */}

    </div>
  )
}

export default HomePage
