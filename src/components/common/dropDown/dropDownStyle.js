import styled from 'styled-components'


export const CurrentRank = styled.div`
  color:white;
  width:25px;
  border: none;
  &:hover{
        background-color: #f1f1f1;
    }
`
export const Body = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 25px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  div{
    display: block;
    transition: 150ms;
    &:hover{
        transition: 150ms;
        background-color: rgba(0,0,0,0.2);
    }
  }
`

export const Main = styled.a`
  position: relative;
  display: inline-block;
  &:hover{
    ${Body}{
        display: block;
    }
    ${CurrentRank}{
        background:rgba(255, 136, 0, 0.3);
    }
  }
`