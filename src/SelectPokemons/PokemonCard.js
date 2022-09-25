import React from 'react';
import styles from './styles.module.css';

const PokemonCard = ({pokemon}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{pokemon.name.toUpperCase()}</h1>
            <img className={styles.image} src={pokemon.url} alt={pokemon.name}/>
        </div>
    )
}
export default PokemonCard;