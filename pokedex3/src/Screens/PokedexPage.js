import React, {useContext, useState, useEffect} from 'react';
import Header from '../Components/Header/Header'
import ContextPokemons from '../Contexts/ContextPokemons'
import CardPokemon from '../Components/CardPokemon/CardPokemon'
import {Div, MainDiv} from './styles'


export default function PokedexPage() {

  const { myPokedex, setMyPokedex} = useContext(ContextPokemons)

  const RemovePokemonToList = (newPokemon) => {
   
    const newPokedex = myPokedex.filter(pokemon=>{
      return pokemon.id !== newPokemon.id
    })
    setMyPokedex(newPokedex)
  }
  useEffect(()=>{
    if(myPokedex.length > 0){
      
      localStorage.setItem('pokedex', JSON.stringify(myPokedex))
      
    }
  }, [myPokedex])
  
 return (
   <MainDiv>
      <Header
      pokelist={true}/>

   <Div>
      
      {myPokedex && myPokedex.map(pokemon=>{
        return <CardPokemon key={pokemon.id}
        color={pokemon.color}
        name={pokemon.name}
        id={pokemon.id}
        type={pokemon.type}
        image={pokemon.image_front}
        onClickPokeball={()=>RemovePokemonToList(pokemon)}
        messageButton='Let go'
        />
      })}
   </Div>
   </MainDiv>
  );
}
