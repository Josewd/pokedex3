import {palletaCores} from '../../Constants/Constants'
import styled from 'styled-components'
const {red, black} = palletaCores


export const Image= styled.img`
    height: 150px;
    width: 150px; 
    z-index : 3;
    cursor: pointer;
    @media screen and (max-width: 700px){
        height: 80px;
        width: 80px; 
  }
`
export const Div = styled.div`

    height: 250px;
    width: 250px;
    background-color: ${black.primary};
    box-shadow: 5px 5px 0px ${black.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    opacity: 80%;
    overflow: hidden;
    position: relative;
    border-radius:5px ;
    &:hover{
        opacity: 100%;
    }
    @media screen and (max-width: 700px){
        height: 150px;
        width: 150px; 
  }


`
export const Name = styled.h4`

    color: white;
    text-align: center;
    text-transform: capitalize;

`
export const TitleContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 95%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 20px;
    background-color: ${red.dark};
    box-shadow: 0px 5px 5px rgba(255,255,255,0.2);
    @media screen and (max-width: 700px){
        height: 25px;
         
  }
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 3px;
    left: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
`
export const TypeContainer = styled.div`
     
     height: 20px;
     width: 80px;
     padding: 4px;
     margin: 5px;
     background-color: ${props=> props.color};
     color:${props=> props.color === '#30333A'? 'whitesmoke' : 'black'};
     border-radius: 5px;
     text-align: center;
     text-transform: uppercase;
     font-weight: bold;
     letter-spacing: 1px;
     font-size: 14px;
     @media screen and (max-width: 700px){
        height: 10px;
        width: 60px; 
        font-size: 10px;
  }
     

`
export const ButtonPrimary = styled.button`

    border: none;
    outline: none;
    border-radius: 50%;
    height: 50px;
    width: 80px;
    margin: 5px;
    background-color: transparent;
    color: whitesmoke;
    font-size: small;
    z-index: 4;
`

export const ImageButton = styled.img`

    height: 30px;
    width: 30px;
    margin: 5px;
    cursor: pointer;
    &:hover{
        transform: rotate(310deg);
    }

`