import styled from 'styled-components';

export const MainDiv = styled.div`
    min-height: 100vh;
    width: 90%;
    margin: 0 auto;
    
`

export const BeerCard = styled.div`
    border: none;
    border-radius: 3px;
    box-shadow: 0 2px 8px black;
    width:250px;
    height: 300px;
    display:flex;
    flex-direction:column;
    cursor: pointer;
    margin: 15px 25px;
    transition:200ms;
    background: radial-gradient(circle, #ffffff 0%, #000000 100%);
    div{
        padding: 10px;
        &:nth-child(1){
            padding-bottom: 0px;
        }
    }
    &:hover{
        transform: translateY(-10px);
        transition:200ms;
    }
`
export const Pictures = styled.div`
    flex:6;
    display:flex;
    flex-direction:row;
    img{
        width: 25px;
    }
    div{
        flex:1;
        align-self: flex-start;
        padding: 0px !important
    }
    div:nth-child(2){
        flex:3;
        align-self:center;
        
        img{
            width: 58px;
        }     
    }
`
export const BeerName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex:1;
    color: white;
    font-size: 0.9rem;
    width: 94%;
    margin-left: 3% !important;
`
export const DisplayBeers = styled.div`
    display: flex;
    flex-wrap: wrap;    
`
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    border-radius:5px;
`
export const ModalData = styled.div`
    width: 80%;
    margin: 10px auto;
`
export const FlexStart = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const Input = styled.input`
    border: 2px solid rgba(0,0,0,0.2);
    outline: none;
    border-radius: 5px;
    padding-left: 2px;
    transition: 300ms;
    padding: 3px 5px;
    &:focus{
        border: 2px solid rgba(0,0,0,0.8);
        transition: 300ms;
    }
`
export const PlaceHolderImage = styled.img`
    position: absolute;
    right: 5px;
    width: 15px;
    cursor: pointer;
    top: 50%;
    transform: translate(0,-50%);
`
export const PositionRelative = styled.div`
    position: relative;
`
export const FoodFilterError = styled.div`
    color: red;
    margin-left: 10px;
`
export const FancyLink = styled.div`
    cursor: pointer;
    width: max-content;
    float: right;
    margin-bottom: 20px;
    text-decoration: none;
    position: relative;
    &:after{
        content:"";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: rgb(255, 136, 0);
        height: 2px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 150ms ease-in;
    }
    &:hover{
        &::after{
            transform: scaleX(1);
        }
    }
`
export const SearchButton = styled.div`
    margin-left: 25px;
    border-radius:5px;
    position: relative;
    cursor: pointer;
    padding: 5px 8px;
    outline: none;
    border: 0;
    color: white;
    background: rgb(255, 136, 0);
    z-index: 1;
    &::after{
        content:"";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius:5px;
        background: rgba(0,0,0,0.2);
        z-index: -1;
        transition: transform 250ms ease-in;
        transform: scaleX(0);
        transform-origin: right;
    }
    &:hover{
        &::after{
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`