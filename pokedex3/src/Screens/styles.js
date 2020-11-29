import {palletaCores} from '../Constants/Constants'
import styled from 'styled-components'
const {yellow, red, green, blue, purple, black} = palletaCores


export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px){
        margin-top: 20px;
  }

`

export const MainDiv = styled.div`

    min-height: 90vh;
    padding-top: 90px;
    position: relative;
    max-height: max-content;
    width: 100vw;
    background-color: ${black.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
export const MainDetails= styled(MainDiv)`

    
    padding-top: 0px;
    z-index: 1;
    
`
export const MainContainer = styled(MainDiv)`
    
    flex-direction: row;
    @media screen and (max-width: 700px){
        flex-flow: row wrap;

    }

`

export const ButtonFooter = styled.button`

    outline: none;
    border: none;
    position: fixed;
    bottom: 20px;
    right: 50px;
    padding-top: 5px;
    width:60px;
    border-radius: 50%;
    height: 60px;
    z-index: 5;
    background-color: ${yellow.primary};
    border: 2px solid ${black.dark} ;
    font-size: 30px;
    text-align: center;

   &:hover{
     background-color: ${yellow.dark}  
   } 
`
export const ImageContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 450px;
    background-color: #cfcfcf;
    border-radius: 20px;
    margin: 10px;
    margin-top: -70px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 8px 10px rgba(0,0,0,0.2);
    @media screen and (max-width: 700px){

        width: 350px;
        height: 400px;
        margin-top: 30px;
    }

`
export const Image = styled.img`

   width: 90%;
   height: 315px;
   margin-top: 30px;
   z-index: 4;
   @media screen and (max-width: 700px){
        
    width: 200px;
    height: 200px;
    margin-top: 30px;
    z-index: 4;
    }

`
export const StatContainer = styled(ImageContainer)`

   width: 350px;
   justify-content: flex-end;
   height: 400px;
   padding-bottom: 50px;
`
export const InfoContainer = styled(ImageContainer)`

   width: 770px;
   height: 100px;
   display: flex;
   flex-direction: row;
   margin-top: -150px;
   align-self: flex-start;
   margin-left: 115px;
   @media screen and (max-width: 700px){

    width: 350px;
   height: 100px;
   margin-top: 0px;
   align-self: center;
   margin-left: 0px;
   font-size: 15px;
   &.chain{
       font-size: 5px;
   }
}

`

export const TypeContainer = styled.div`

    width: 100%;
    height: 80px;
    position: absolute;
    top: -5px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${props=>props.color};
    color:${props=> props.color === '#30333A'? 'whitesmoke' : 'black'};
    box-shadow: 0px 8px 10px rgba(0,0,0,0.2);
`
export const MovesContainer = styled(ImageContainer)`

   width: 350px;
   height: 560px;
   margin-top: 35px;
   @media screen and (max-width: 700px){

    width: 350px;
    height: 450px;
    margin-top: 30px;
}
  
  

`
export const IdContainer = styled.div`

    position: absolute;
    top: -2px;
    left: -4px;
    width: 95px;
    height: 45px;
  border-radius: 10px;
    background-color: ${props=>props.color};
    color:${props=> props.color === '#30333A'? 'whitesmoke' : 'black'};
   display: flex;
   align-items: center;
   justify-content: flex-end;
   font-size: 25px;
   font-weight: bold;
   padding-right: 5px;

`

export const StatBar = styled.progress`

   width: 300px;
   height: 20px;
   margin-top: 0px;
   -webkit-appearance: none;
   &::-webkit-progress-bar {
        background-color: white;
        border-radius: 20px;
        overflow: hidden;
}
&::-webkit-progress-value {
        background-color: ${props=>props.color};
        border-radius: 20px;
        overflow: hidden;
}

`
export const SizesContainer = styled.div`

    display: flex;
   align-items: center;
   justify-content: space-between;
   margin: auto;
   width: 70%;
   height: max-content;

`

export const PokemonName = styled.h1`

    margin-bottom: -20px;
   
`
export const EvolutionName = styled.h3`

    margin-top: -20px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 700px){
        font-size: 14px;

    }

`