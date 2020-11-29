import React, {useContext, useState, useEffect} from 'react';
import Header from '../Components/Header/Header'
import ContextPokemons from '../Contexts/ContextPokemons'
import {Div, MainDiv} from './styles'
import {TextField} from '@material-ui/core'
import useInput from '../Hooks/InputCtrl'
import versus from '../img/versus.png'
import defaultImg from '../img/default.jpg'
import SelectPokemon from '../Components/SelectPokemon.js/SelectPokemon'
import PokemonFightContainer from '../Components/PokemonFightContainer/PokemonFightContainer'
import {SelectContainer, 
        LogoVersus, 
        FightContainer, 
        FightButton, 
        } 
        from './fightStyles'


export default function FightPage() {

    const { data , myPokedex} = useContext(ContextPokemons)

    const defaultObj = { 
        name: 'Select Fighter',
        id: 0, 
        color: 'white',
        image_front: defaultImg, 
        stats:[{name: 'hp', value: 0}, 
        {name:'attack', value: 0}, 
        {name :'defense', value: 0},
        {name:'special_attack', value: 0},
        {name:'special_defense', value: 0},
       {name:'speed', value: 0}],
     }
    
    const [yourPokemon, onChange] = useInput('')
    const [oponentPokemon, onChange2] = useInput('')
    const [selectedFighter, setSelectedFighter] = useState(undefined)
    const [selectedOponent, setSelectedOponent] = useState(undefined)

    useEffect(()=>{
        if(yourPokemon){
            
            const fighter = myPokedex.filter(pokemon=>{
                return pokemon.name === yourPokemon
            })
             setSelectedFighter(fighter)
        }else{
            setSelectedFighter([defaultObj])
        }
        if(oponentPokemon){
            const oponent = data.filter(pokemon=>{
                return pokemon.name === oponentPokemon
            })
                setSelectedOponent(oponent)
        }else{
            setSelectedOponent([defaultObj]) 
        }

    },[yourPokemon, oponentPokemon, data])

    const getWinner = ()=>{

        let fighterPoints = 0
        let oponentPoints = 0

        for(let item of selectedFighter[0].stats){
            fighterPoints += Number(item.value)
        }
        for(let item of selectedOponent[0].stats){
            oponentPoints += Number(item.value)
        }

        if(fighterPoints > oponentPoints && oponentPoints > 0){

            alert(`${yourPokemon.toUpperCase()} Won the Battle! ${selectedFighter[0].name +' '+ fighterPoints +' Vs '+ oponentPoints +' '+selectedOponent[0].name} `)

        }else if(oponentPoints > fighterPoints && fighterPoints > 0){

            alert(`${oponentPokemon.toUpperCase()} Won the Battle!  ${selectedOponent[0].name +' '+oponentPoints +' Vs '+ fighterPoints +' '+ selectedFighter[0].name }  `)

        }else if(fighterPoints === 0 || oponentPoints === 0){

            alert('You need to select a Pokemon')

        }else{
            alert( `Its a Tie'  ${selectedFighter[0].name +' '+ fighterPoints +' Vs '+oponentPoints +' '+selectedOponent[0].name}` )
        }

    }



 return (
   <MainDiv>
      <Header
      pokelist={true}/>

   <Div>
    <SelectContainer>
        <SelectPokemon
            yourPokemon={yourPokemon}
            onChangePokemon={onChange}
            data={myPokedex}
        />
        <LogoVersus src={versus} alt="versus" />
        <SelectPokemon
            yourPokemon={oponentPokemon}
            onChangePokemon={onChange2}
            data={data}
        />
    </SelectContainer>
    <FightContainer>
            {selectedFighter &&
            <PokemonFightContainer 
                orientation='left'
                fighter={selectedFighter}
            />
            }
            <FightButton onClick={getWinner}>Fight</FightButton>
            {selectedOponent && 
            <PokemonFightContainer
            orientation='right'
            fighter={selectedOponent}
        />
         }
    </FightContainer>

   </Div>
   </MainDiv>
  );
}

