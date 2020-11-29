import React from 'react';
import {
    IdPokemon, 
    PokeName, 
    PokemonContainer,
    ImagePokemon, 
    StatPokemon,
    StatLabel 
   } from './Styled'



export default function PokemonFightContainer(props) {
  return (
    <PokemonContainer orientation={props.orientation}>
                <IdPokemon color={props.fighter[0].color}>#0{props.fighter[0].id}</IdPokemon>
                <ImagePokemon src={props.fighter[0].image_front} />
            <PokeName>{props.fighter[0].name}</PokeName>
            {props.fighter[0].stats && props.fighter[0].stats.map(stat=>{
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
                                <StatLabel htmlFor='stat'>{stat.name}: {stat.value}</StatLabel>
                                <StatPokemon color={color} id='stat' value={stat.value} max="250">{stat.value}</StatPokemon>
                            </div>
                })}
            </PokemonContainer>
  );
}
