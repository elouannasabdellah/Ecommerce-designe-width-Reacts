import React from 'react'
import { Container, Row } from 'react-bootstrap'

import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'

import pic from "../../images/pic.png"
import laptob from "../../images/labtop.png"
import clothe from "../../images/clothe.png"
import cate2 from "../../images/cat2.png"

const HomeCategory = () => {
  return (
        
        <Container className='my-3'  >
            <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row>
            <CategoryCard title='اجهزة منزلية' background="#F4DBA4" img={pic} />
            <CategoryCard title='اجهزة منزلية' background="purple" img={laptob} />
            <CategoryCard title='اجهزة منزلية' background="lime" img={pic} />
            <CategoryCard title='اجهزة منزلية' background="#F4DBA4" img={clothe} />
            <CategoryCard title='اجهزة منزلية' background="#F4DBA4" img={cate2} />
            <CategoryCard title='اجهزة منزلية' background="#F4DBA4" img={pic} />
            
            </Row>
        </Container>

  )
}

export default HomeCategory
