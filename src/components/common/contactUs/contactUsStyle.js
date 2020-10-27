import styled from 'styled-components';

export const Sticky = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 50%;
    width: min-content;
    float: right;
    margin-right: 10px;
    box-shadow: 0 2px 4px black, 0 -2px 4px black;
    border-radius: 5px;
    padding: 10px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #f2f2f2;
    a{
        margin-bottom: 15px;
        transition:150ms;
        &:hover{
            transition:150ms;
            transform: scale(1.2);
        }
    }   
`