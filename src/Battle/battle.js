import React from 'react';
import styles from './styles.module.css';

const Battle = ({onBattleClick}) => {
 return (
   <React.Fragment>
   <div className={styles.main}>Battle Component</div>
   <button onClick={onBattleClick}>End</button>
   </React.Fragment>
    
 )
}

export default Battle;