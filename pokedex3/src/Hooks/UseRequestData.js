import { useState, useEffect } from 'react';
import axios from 'axios'
import {palletaCores, selectColorByType }from '../Constants/Constants'



export default function useRequestData (url){

    
    const [arrayPokemon, setArrayPokemon] = useState([])
    const [nextRequest, setNextResquest] = useState('')

    useEffect(()=>{
        //primeiro estagio de requisicao pegar os primeiros 20 pokemons e ja retorna o endPoint Next
        axios.get(url).then(response=>{
            //Salvo esse endPoint no estado e retorno ele pra reutilizar depois
            setNextResquest(response.data.next)
            //segundo estagio da requisicao, para cada um dos 20 pokemons eu pego a url e faco uma requisicao.
            const array = response.data.results.map(objeto=>{
                axios.get(objeto.url).then(response=>{

                    //Crio o objeto para cada pokemon com as informacoes que achei relevante.
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
                       // pokemonObj[stat.stat.name]=[stat.base_stat]
                        })
                        setArrayPokemon(arrayPokemon=> [...arrayPokemon, pokemonObj])
                    })
            })
        }).catch(err=>{
            console.log(err)
        })
    },[url])
    
    //retorno o arrai com os objetos de pokemon e a proximo endPoint
    return [arrayPokemon, nextRequest]
}