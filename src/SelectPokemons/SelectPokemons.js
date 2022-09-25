import React from 'react';
import pokemons from '../shared/characters';
import styles from './styles.module.css';
import PokemonCard from './PokemonCard';


const SelectPokemons = ({username, onSelectClick}) =>{
    return (
        <React.Fragment>
            <h1 className={styles.h1}>Welcome {username}</h1>
            <h1> Select Pokemons </h1>
            {pokemons.map(pokemon=>(
                <PokemonCard pokemon={pokemon} key={pokemon.name} className={pokemon.isSelected}/>
            ))}
            <button onClick={onSelectClick}>Battle</button>
        </React.Fragment>
    )
};

export default SelectPokemons;