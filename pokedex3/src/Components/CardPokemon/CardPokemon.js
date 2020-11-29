import React from 'react'
import {Image, Div, Name, TitleContainer,TypeContainer, ButtonContainer, ImageButton, ButtonPrimary} from './Styled'
import pokeball from '../../img/pokeball.png'
import { useHistory} from 'react-router-dom'

export default function CardPokemon(props) {
  const history = useHistory()
  return (
    <Div >
      <TitleContainer>
        <Name>{props.name}</Name>
        <Name>#0{props.id}</Name>
      </TitleContainer>
        <Image onClick={()=> history.push(`/pokemon_details/${props.name}`)} src={props.image} alt={props.name}/>
        <ButtonContainer>
          <TypeContainer color={props.color}>
            {props.type}
          </TypeContainer>
         <ButtonPrimary onClick={props.onClickPokeball}>
             {props.messageButton}
           <ImageButton src={pokeball}/>
         </ButtonPrimary>
          
        </ButtonContainer>
    </Div>
  );
}
