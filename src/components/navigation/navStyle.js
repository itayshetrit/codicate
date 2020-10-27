import styled from 'styled-components';

export const Bar = styled.div`
  background: black;
  display: flex;
  box-shadow: 0 2px 4px rgba(0,0,0,0.24);
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 12vh;
  font-size:1.3rem;
  a{
      cursor: pointer;
      color: white;
      font-size:1.2rem;
      margin-left:20px;
      transition: 100ms;
      text-decoration-line: none;
      &:hover{
        transform: translateY(-2px);
        transition: 100ms;
      }
  }
  div{
    margin-left:20px;
  }
`