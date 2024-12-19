import logo from './logo.svg';
import {NoteNavn} from './JsKode.js/NoteListe';
import { useState } from 'react';
import NoteutTreker from './JsKode.js/NoteVelger';
import Meny from './JsKode.js/Meny';
import './App.css';

function App() {
  const [noter, setUsers] = useState(NoteNavn)
  const [utvalgte, setWinner] = useState([]);

  const [uiProps,setUiProps] = useState({
    buttonDisabeld: false
  });

//handelers
  const VelgNote=()=>{
    console.log("ord");
  }

  return (
    <div>

    <button onClick={VelgNote}> Velg tilfeldig note</button>

    <ul className= "winners">
      {NoteNavn.map((valkt, index)=> (
      <li key={index} className="list-item">
        {valkt}
      </li>
      
    ))}
    </ul>

    </div>
  );
}

export default App;
