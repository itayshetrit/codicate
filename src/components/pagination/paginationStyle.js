import styled from 'styled-components';

export const PaginationItem = styled.div`
    border-left: 1px solid rgba(0,0,0,0.1);
    border-radius: 1px;
    color: ${props => props.active ? "white" : "black"};
    background: ${props => props.active ? "black" : "#f2f2f2"};
    cursor: pointer;
    padding: 5px 15px;
    transition:200ms;
    &:hover{
        transition:200ms;
        background: ${props => props.active ? "black" : "rgba(0, 0, 0, 0.2)"};
    }
`

export const PaginationNav = styled.div`
    box-shadow: 0 2px 8px black;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin: 50px auto;
    width: min-content;
`