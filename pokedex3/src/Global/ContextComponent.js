
import React, { useEffect, useState } from 'react';
import {BASE_URL} from '../Constants/Constants'
import useRequestData from '../Hooks/UseRequestData'
import ContextPokemons from '../Contexts/ContextPokemons';
import axios from 'axios'
import {selectColorByType, palletaCores} from '../Constants/Constants'

function ContextComponents(props) {
    
    const [data, nextRequest] = useRequestData(`${BASE_URL}?limit=20`)
    const [pokemons, setPokemons] = useState([])
    const [newRequest, setNewRequest] = useState('')
    const [myPokedex, setMyPokedex] = useState([])

    useEffect(() => {
      setPokemons(data)
      setNewRequest(nextRequest)
      if(localStorage.getItem('pokedex')){
        setMyPokedex(JSON.parse(localStorage.getItem('pokedex')))
      }else{
        localStorage.setItem('pokedex', JSON.stringify(myPokedex))
      }
    }, [data])

    

    //Paginacao para da Api, pegar mais pokemons
    const getMorePokemons = ()=>{
      axios.get(newRequest).then(response=>{
       setNewRequest(response.data.next)
       const array = response.data.results.map(objeto=>{
           axios.get(objeto.url).then(response=>{
               let pokemonObj = {
                   id: response.data.id,
                   name: response.data.name,
                   height: response.data.height,
                   weight: response.data.weight,
                   image_front: response.data.sprites.other.dream_world.front_default,
                   image_pixel: response.data.sprites.front_default,
                   type: response.data.types[0].type.name,
                   type2: response.data.types[1] && response.data.types[1].type.name,
                   moves: [],
                   stats: [],
                   color: selectColorByType(response.data.types[0].type.name, palletaCores)
                  }
                  response.data.moves.forEach((move, idx)=>{
                    if(idx <= 5){

                      axios.get(move.move.url).then(response=>{
                        
                          const obj = {'name':[move.move.name], 'power': [response.data.power]}
                          pokemonObj.moves.push(obj)
                          }).catch(err=>{

                          })
                    }
                        })
                   response.data.stats.forEach(stat=>{
                      const statis = {'name': [stat.stat.name], 'value': [stat.base_stat]}
                      pokemonObj.stats.push(statis)
                   })
                   
                   setPokemons(pokemons=> [...pokemons, pokemonObj])
               })
       })
   }).catch(err=>{
       //console.log(err)
   })
     
  }
   
    
  const informations = {
      data : pokemons,
      nextRequest: newRequest,
      getMorePokemons: getMorePokemons,
      setMyPokedex: setMyPokedex,
      myPokedex: myPokedex
    }
         
    return (
      <ContextPokemons.Provider value={informations}>
        {props.children}
        </ContextPokemons.Provider >
    );
  }
  
  export default ContextComponents;
  