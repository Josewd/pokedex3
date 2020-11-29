import React, {useEffect, useState, useContext,} from 'react';
import Header from '../Components/Header/Header'
import {useParams, useHistory} from 'react-router-dom'
import ContextPokemons from '../Contexts/ContextPokemons';
import {getEvolutions} from '../Constants/Constants'
import {SizesContainer,
        StatBar, 
        MainDetails, 
        MainContainer, 
        ImageContainer,
        Image, 
        StatContainer, 
        InfoContainer, 
        TypeContainer, 
        MovesContainer,
        IdContainer, 
        PokemonName,
        EvolutionName} from './styles'



export default function PokemonDetaisPage(props) {

    const {data, myPokedex} = useContext(ContextPokemons)
    const pathParams = useParams()
    const [pokemon, setPokemon] = useState({})
    const [chain, setChain]= useState({})
    const [imageChain, setImageChain]= useState({})
    const history = useHistory()

    useEffect(()=>{
        
        let selectedPokemon = data.filter(pokemon=>{
            return pokemon.name === pathParams.Pokemon
        })
        if(selectedPokemon.length > 0){

            setPokemon(selectedPokemon[0])
        }else{
            selectedPokemon = myPokedex.filter(pokemon=>{
                return pokemon.name === pathParams.Pokemon
            })
            setPokemon(selectedPokemon[0])
        }
        getEvolutions(pathParams.Pokemon, setChain)
        getImageChain()
    }, [data, pathParams.Pokemon, chain, myPokedex])

    const getImageChain = ()=>{
        let first;
        let second;
        let third;
        data.forEach(pokemon=>{
            if(pokemon.name === chain.first){
                first = pokemon.image_pixel
            }else if(pokemon.name === chain.second){
                second = pokemon.image_pixel
            }else if(pokemon.name === chain.third){
                third = pokemon.image_pixel
            }
            setImageChain({first: first, second: second, third: third})
        })
    }
  
  return (

      <MainDetails>
        <Header
         pokelist={true}
        />
    <MainContainer>
        <ImageContainer className="images">
            <IdContainer color={pokemon.color}>
                #0{pokemon.id}
            </IdContainer>
            <Image  src={pokemon.image_front} alt={pokemon && pokemon.name}/>
            <PokemonName>{pokemon.name}</PokemonName>
            <SizesContainer>
                <h3> {(pokemon.weight * 0.45).toFixed(2)}kg</h3>
                <h3> {((pokemon.height/2)*  30.48).toFixed(1)}Cm</h3>
            </SizesContainer>
        </ImageContainer>
        <StatContainer>
        <TypeContainer color={pokemon.color}>
                
                <h2>{pokemon.type}</h2> 
                <h2>{pokemon.type2}</h2>
        </TypeContainer>
            <div>
                {pokemon.stats && pokemon.stats.map(stat=>{
                        let color;
                        if(stat.name.includes('attack')){
                            color = '#F52C33'
                        }else if( stat.name.includes('defense')){
                            color = '#00a9bf'
                        }else if(stat.name.includes('speed')){
                            color = '#F2DA5E'
                        }else if(stat.name.includes('hp')){
                            color = '#498e2c'
                        }else{
                            color = '#451659'
                        }
                    

                    return <div key={stat.name}>
                                <label htmlFor='stat'>{stat.name}: {stat.value}</label><br/>
                                <StatBar color={color} id='stat' value={stat.value} max="250">{stat.value}</StatBar>
                            </div>
                })}
            </div>
        </StatContainer>
       
            <MovesContainer>
                <TypeContainer color={pokemon.color} >
                    <PokemonName>
                        Moves
                    </PokemonName>
                </TypeContainer>
               {pokemon.moves && pokemon.moves.map((move, idx)=>{
                   let color;
                   if(move.power > 80){
                       color = '#F52C33'
                   }else if(move.power > 60 && move.power <= 80 ){
                       color = '#00a9bf'
                   }else if(move.power > 40 && move.power <= 60){
                       color = '#F2DA5E'
                   }else if(move.power > 10 && move.power <= 40){
                       color = '#498e2c'
                   }else{
                       color = '#451659'
                   }
               

               return <div key={move.name}>
                           <label htmlFor='stat'>{move.name}: {move.power === null?'0':  move.power}</label><br/>
                           <StatBar color={color} id='stat' value={move.power} max="250">{move.power}</StatBar>
                       </div>
           })}
            </MovesContainer>
    </MainContainer>
    <InfoContainer>
        <div>
            <img  src={imageChain.first} alt=""/>

            <EvolutionName  onClick={()=>history.push(`/pokemon_details/${chain.first}`)}>{chain.first} </EvolutionName>
        </div>
        <div>
            <img src={imageChain.second} alt=""/>
            <EvolutionName onClick={()=>history.push(`/pokemon_details/${chain.second}`)}>{chain.second}  </EvolutionName>
        </div>
        <div>
            <img src={imageChain.third} alt=""/>
            <EvolutionName onClick={()=>history.push(`/pokemon_details/${chain.third}`)}>{chain.third}</EvolutionName>
        </div>
    </InfoContainer>
    </MainDetails>
  );
}
