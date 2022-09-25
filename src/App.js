import {useState, useEffect} from 'react';
import styles from './styles.module.css';
import Start from './Start/start';
import SelectPokemons from './SelectPokemons/SelectPokemons';
import Battle from './Battle/battle';
import PostBattle from './PostBattle/postbattle';


function App() {

  const [mode,setMode] = useState('Select');
  const [username, setUsername] = useState ('Nat');
  const [winner, setWinner] = useState();

  return (
    <div className={styles.main}>
      {mode === 'start' && (<Start onStartClick={(username)=>{
        setMode('select');
        setUsername(username);
      }}/>)}

      {mode === 'select' && (<SelectPokemons username={username} onSelectClick={()=>setMode('battle')}/>)}

      {mode === 'battle' && (<Battle onBattleClick={()=>setMode('end')}/>)}

      {mode === 'end' && (<PostBattle onEndClick={()=>setMode('start')}/>)}
    </div>
  );
};

export default App;


