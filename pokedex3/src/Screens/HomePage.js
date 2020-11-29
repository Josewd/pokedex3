import React, {useContext, useState, useEffect} from 'react';
import Header from '../Components/Header/Header'
import ContextPokemons from '../Contexts/ContextPokemons'
import CardPokemon from '../Components/CardPokemon/CardPokemon'
import {Div, MainDiv, ButtonFooter} from './styles'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

export default function HomePage() {
  const [count, setCount] = useState(0)
  const {data, getMorePokemons, myPokedex, setMyPokedex} = useContext(ContextPokemons)
  

  // const controlRequest = ()=>{
  //   if(data.length - count === 20){
  //     setCount(count + 20)
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  const addPokemonToList = (newPokemon) => {
    const PokemonPosition = myPokedex.findIndex((i) => i.id === newPokemon.id)
    if (PokemonPosition === -1) {
      setMyPokedex(myPokedex=> [...myPokedex, newPokemon])
      alert(`${newPokemon.name.toUpperCase()} Capturado Com Sucesso!`)
    }else{
      alert(`${newPokemon.name.toUpperCase()} Ja foi Capturado!`)
    }
  }

  useEffect(()=>{
    if(myPokedex.length > 0){
      
      localStorage.setItem('pokedex', JSON.stringify(myPokedex))
      
    }
  }, [myPokedex])
  

    // window.addEventListener('scroll', ()=>{
    //   const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    //   if (scrollTop + clientHeight >= scrollHeight &&  ) {
    //     getMorePokemons();
    //     console.log('bottom')
    //   }
    // })
    

 
 return (
   <MainDiv >
      <Header
      pokelist={false}
      />

   <Div id='main'>
      
      {data && data.map(pokemon=>{
        return <CardPokemon key={pokemon.id}
        color={pokemon.color}
        name={pokemon.name}
        id={pokemon.id}
        type={pokemon.type}
        image={pokemon.image_front}
        onClickPokeball={()=>addPokemonToList(pokemon)}
        messageButton='Get it'
        />
       
      })}
   </Div>
    <ButtonFooter onClick={getMorePokemons}>
      <KeyboardArrowDownRoundedIcon/>
    </ButtonFooter>
   </MainDiv>
  );
}
