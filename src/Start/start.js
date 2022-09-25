import styles from './styles.module.css';
import logo from '../assets/pokemon-logo.png';
import {useState} from 'react';

const Start = ({onStartClick}) => {
  const [name, setName] = useState ();
  const onTempChange = (event) => {
  setName(event.target.value);
  console.log(name);
}
 return (
 <div className={styles.main}>
    <img className={styles.logo} src={logo} alt='pokemonlogo'/>
    <br/>
    <form>
      <label>Enter Username: </label>
      <br/>
      <input type='text' id='username' name='username' maxLength='10' placeholder='Username' onChange={onTempChange}/>
      <br/>
      <button className={styles.startButton} onSubmit={()=>{onStartClick(name)}}>Start Game</button>
    </form>
 </div>)
}

export default Start;