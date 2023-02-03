import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ( {title, btntitle,pathText} ) => {
  return (

        <div className='d-flex my-3 justify-content-between ' >
            <div className='sub_title font-weight-normal'  > {title} </div>

            { btntitle ? (
                <Link to= {`${pathText}`} style={{textDecoration:"none",color:"black"}} >
                   <div className='shopping_now px-3 py-1'    > {btntitle} </div>
                </Link>
            ): null }
        </div>


  )
}

export default SubTitle
