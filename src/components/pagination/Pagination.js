import React from 'react';

import { PaginationNav, PaginationItem } from './paginationStyle';

const Pagination = (props) => {
    let items = [];
    for (let num = props.page - props.eachSide; num <= props.page + props.eachSide; num++) {
        if (num > 0 && num <= props.pages) {
            items.push(
                <PaginationItem onClick={() => props.setPage(num)} key={num} active={num === props.page}>
                    {num}
                </PaginationItem>,
            );
        }
    }

    return (
        <PaginationNav>
            {props.page > 1 && <PaginationItem
                onClick={() => props.setPage(1)}>{"<<"}</PaginationItem>}
            {props.page > 1 && <PaginationItem onClick={() => props.setPage(props.page - 1)}>{"<"}</PaginationItem>}
            {items}
            {props.page < props.pages && <PaginationItem onClick={() => props.setPage(props.page + 1)}>{">"}</PaginationItem>}
            {props.page < props.pages && <PaginationItem onClick={() => props.setPage(props.pages)}>{">>"}</PaginationItem>}
        </PaginationNav>
    )
}
export default Pagination;