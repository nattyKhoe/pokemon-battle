import React from 'react';
import styles from './styles.module.css';

const PostBattle = ({onEndClick}) => {
 return (
 <React.Fragment>
    <div className={styles.main}>PostBattle Component</div>
    <button className='button' onClick={onEndClick}>End</button>
 </React.Fragment>
 )
}

export default PostBattle;