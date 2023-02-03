import React from 'react'

import next from "../../images/next.png"

const LeftButton = (onClick,onDisabled ) => {
  return (

        <img  src={next} alt="left_nav" width='35' height="35" onClick={onClick} onDisabled={onDisabled} style={{float:"left" ,marginTop:"200px"}}  />

  )
}

export default LeftButton
