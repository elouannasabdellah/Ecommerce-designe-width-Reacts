import React from 'react'
import UnopDropdown from "unop-react-dropdown";

import sort from "../../images/sort.png"

const SearchCountResult = ({title}) => {

    const handler= ()=>{}

  return (

        <div className='d-flex justify-content-between mt-3 ' > 
            <div className='sub-title' style={{fontFamily:"monospace",fontWeight:"bold" }} > {title} </div>
            <div className='search-count-text d-flex' >

            <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                trigger={
                    <p className='mx-1' >
                        <img src= {sort} alt='sort'  width="40" />
                        ترتيب حسب
                    </p>

                }
                delay={0}
                align="CENTER"
                hover
            >
            <div className='card-filter' >
                <div className='border-bottom filter_item ' > الاكثر مبيعا </div>
                <div  className='border-bottom filter_item ' >  الاعلى تقييما</div>
                <div  className='border-bottom  filter_item' > السعر من آلاقل للاعلى</div>
                <div  className='border-bottom  filter_item' > السعر من الاعلى للاقل</div>
            </div>
            </UnopDropdown>

            </div>


        </div>
  )
}

export default SearchCountResult
