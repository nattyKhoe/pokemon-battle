import React from 'react';


const PokemonCard = (pokemon) => {
    return (
        <React.Fragment>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.url} alt={pokemon.name}/>
        </React.Fragment>
    )
}
export default PokemonCard;