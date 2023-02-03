import React from 'react'

import prev from "../../images/prev.png"

const RightButton = ( onClick ,onDisabled ) => {
  return (
    <div>
      
      <img  src={prev} alt="right_nav"  onClick={onClick} onDisabled={onDisabled} width='35' height="35" style={{float:"right",marginTop:"200px", cursor:"pointer"}}  />

    </div>
  )
}

export default RightButton
