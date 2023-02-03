import React from 'react'

import ReactPaginate from 'react-paginate';

const Pagination = () => {

    const handlePageClick=()=>{

    }
    const pageCount= 20

  return (
    
    <ReactPaginate
    breakLabel="..."
    nextLabel=" التالي"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={3}
    pageCount={pageCount}
    previousLabel=" السابق"
   // renderOnZeroPageCount={null}

   containerClassName={" pagination justify-content-center p-3 "} 
    pageClassName = {"page-item"}
    pageLinkClassName= {"page-link"}

    previousClassName= {"page-item"}
    nextClassName= {"page-item"}

    previousLinkClassName= {"page-link"}
    nextLinkClassName= {"page-link"}

    breakClassName= {"page-item"}
    breakLinkClassName= {"page-link"}

    activeClassName= {"active"}

    />

  )
}

export default Pagination
