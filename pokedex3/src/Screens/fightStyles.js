import styled from 'styled-components'
import { PokedexButton } from '../Components/Header/Styled'
import {palletaCores} from '../Constants/Constants'
import {TextField} from '@material-ui/core'
const {black, red, } = palletaCores



export const SelectContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: 70%;
    height: 75px;
    box-shadow: 5px 8px 0px ${black.dark};
    background-color: whitesmoke;
    padding: 10px 20px;
    overflow: hidden;
    @media screen and (max-width: 700px){
        width: 80%;
        margin-top: -50px;
    }
  
`
export const MySelect = styled(TextField)`

@media screen and (max-width: 700px){
        width: 40%;
        margin-top: 20px;
        height: 30px;
    }
`

export const LogoVersus = styled.img`

    height: 150px;
    width: 75px;

`

export const FightContainer = styled.div`

    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    width: 100%;
    height: max-content;  
    padding: 0px 150px;
    @media screen and (max-width: 700px){
        height: 400px;
    }

`

export const FightButton = styled(PokedexButton)`
     
     max-height: 50px;
     width: 100px;
     align-self: center;
     justify-self: center;
     font-weight: bold;
     background-color: ${red.dark};
     color: white;
     &:hover{
        background-color: ${red.primary};
     }
     @media screen and (max-width: 700px){
        align-self: flex-end;
        position: absolute;
        bottom: 10px;
        left: 30px;
        width: 300px;
        
    }


`

