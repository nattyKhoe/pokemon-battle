import React, {useState} from 'react';
import styles from './styles.module.css';
import Start from './Start/start';
import SelectPokemons from './SelectPokemons/SelectPokemons';
import Battle from './Battle/battle';
import PostBattle from './PostBattle/postbattle';


function App() {

  const [mode,setMode] = useState('select');
  const [username, setUsername] = useState ('Nat');

  return (
    <div className={styles.main}>
      {mode === 'start' && (<Start
      onStartClick={()=>setMode('select')}
      onUsernameChange={(event)=>setUsername (event.target.value)}/>)}

      {mode === 'select' && (<SelectPokemons username={username}/>)}

      {mode === 'battle' && (<Battle onClick={()=>setMode('end')}/>)}

      {mode === 'end' && (<PostBattle onClick={()=>setMode('start')}/>)}
    </div>
  );
};

export default App;


