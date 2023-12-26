import ReactPaginate from 'react-paginate';
import React, { useState, useEffect } from "react";

interface PaginationProps {
    data: {
        totalPage: number;
    };
}

function Pagination(props:PaginationProps) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);
    const [totalItems, setTotalItems] = useState(props.data.totalPage);

    

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <ReactPaginate //Добавление пагинации с помощью react-paginate
            pageCount={Math.ceil(totalItems / itemsPerPage)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    );
}
export default Pagination;