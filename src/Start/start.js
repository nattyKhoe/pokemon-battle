import styles from './styles.module.css';
import logo from '../assets/pokemon-logo.png'

const Start = ({onStartClick, onUsernameChange}) => {

 return (
 <div className={styles.main}>
    <img className={styles.logo} src={logo} alt='pokemonlogo'/>
    <br/>
    <form>
      <label>Enter Username: </label>
      <br/>
      <input type='text' id='username' name='username' maxLength='10' placeholder='Username' onChange={onUsernameChange}/>
      <br/>
      <button className={styles.startButton} onSubmit={onStartClick}>Start Game</button>
    </form>
 </div>)
}

export default Start;