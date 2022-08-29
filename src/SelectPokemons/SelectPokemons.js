import React from 'react';
import PokemonCard from './PokemonCard';
import pokemons from '../shared/characters';

const SelectPokemons = () =>{
    return (
        <React.Fragment>
            {pokemons.map(pokemon=>(
                <PokemonCard pokemon={pokemon} key={pokemon.name}/>
            ))}
        </React.Fragment>
    )
};

export default SelectPokemons;