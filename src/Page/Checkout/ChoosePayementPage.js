import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethod from '../../Components/Checkout/ChoosePayMethod'

const ChoosePayementPage = () => {
  return (

        <Container style={{minHeight:"500px"}} >
            <ChoosePayMethod/>
        </Container>
  )
}

export default ChoosePayementPage
