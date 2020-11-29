import React from 'react';
import {useHistory} from 'react-router-dom'
import {TopMenu, Title, Logo, LogoContainer, PokedexButton} from './Styled'
import pokeball from '../../img/pokeball.png'


export default function Header(props) {
  const history = useHistory()
  return (
      <TopMenu>
          <LogoContainer>
            <Logo src={pokeball} alt="pokeball"/>
            <Title> Pokedex</Title>
          </LogoContainer>
          <LogoContainer>
          <PokedexButton  onClick={()=> history.push('/fight')}>Fight Arena</PokedexButton>
            <PokedexButton  onClick={()=> history.push('/pokedex')}>My Pokedex</PokedexButton>
            {props.pokelist && <PokedexButton  onClick={()=> history.push('/')}>Back</PokedexButton>}
          </LogoContainer>
      </TopMenu>
  );
}
