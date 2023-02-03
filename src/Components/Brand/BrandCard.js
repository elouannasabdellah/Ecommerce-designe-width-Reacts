import React from 'react'
import { Card, Col } from 'react-bootstrap'



const BrandCard = ({img}) => {
  return (

    <Col lg="2" md="4" sm="6" xs="6"  className='my-2'  >

        <Card style={ {border:"none", borderRadius:"8px", backgroundColor:"#fff", height:"151px"} } >

             <Card.Img style={{width:"150px"}}  src= {img} />
     
        </Card>

    </Col>
  )
}

export default BrandCard
