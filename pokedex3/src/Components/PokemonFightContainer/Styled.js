import styled from 'styled-components'
import {ImageContainer, IdContainer, Image, StatBar,} from '../../Screens/styles'

export const PokemonContainer = styled(ImageContainer)`
    height: 600px;
    margin-top: 10px;
   
    @media screen and (max-width: 700px){

        width: 160px;
        height: 280px;
        margin-top: 30px;
        align-self: flex-start;
        position: absolute;
        top: 10px;
        left: ${props=> props.orientation === 'right' ? 'none' : '5px' };
        right: ${props=> props.orientation === 'right' ? '5px' : 'none' };
    }

`

export const IdPokemon = styled(IdContainer)`

@media screen and (max-width: 700px){
        
        width: 60px;
        height: 30px;
        font-size: 16px;
        
        }

`

export const ImagePokemon = styled(Image)`
 
   width: 70%;
   height: 250px;
   margin-top: 0px;
   z-index: 4;
   @media screen and (max-width: 700px){
        
    width: 100px;
    height: 100px;
    margin-top: 0px;
    z-index: 4;
    }

`

export const StatPokemon = styled(StatBar)`

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

@media screen and (max-width: 700px){
        
        width: 150px;
        height: 10px;
    
        }

`
export const StatLabel = styled.label`
        display: block;
    @media screen and (max-width: 700px){
        
        font-size: 10px;
        margin-bottom: -10px;
        
        }
`

export const PokeName = styled.h1`

    margin-bottom: 0px;
    @media screen and (max-width: 700px){
        
        font-size: 20px;
        margin-top: -5px;
        }

`