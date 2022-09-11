import React from 'react';
import PokemonCard from './PokemonCard';
import pokemons from '../shared/characters';

const SelectPokemons = () =>{
    return (
        <React.Fragment>
            {pokemons.map(pokemon=>(
                // <div>
                //     <h1>{pokemon.name}</h1>
                //     <img src={pokemon.url} alt={pokemon.name}/>
                // </div>
                <PokemonCard pokemon={pokemon} key={pokemon.name}/>
            ))}
        </React.Fragment>
    )
};

export default SelectPokemons;