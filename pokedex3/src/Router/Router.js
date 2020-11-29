import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../Screens/HomePage'
import PokedexPage from '../Screens/PokedexPage'
import PokemonDetailsPage from '../Screens/PokemonDetailsPage'
import FightPage from '../Screens/FightPage'

export default function Router (){


    return (
        <BrowserRouter>
            <Switch>
                <Route component={HomePage} exact path={'/'}/>
                <Route component={PokedexPage} exact path={'/pokedex'}/>
                <Route component={PokemonDetailsPage} exact path={'/pokemon_details/:Pokemon'}/>
                <Route component={FightPage} exact path={'/fight'}/>
            </Switch>
        </BrowserRouter>
    )
}