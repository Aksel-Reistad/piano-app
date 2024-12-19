import React, { useState } from 'react';
import { NoteNavn } from './JsKode/NoteListe'; // Importerer listen med noter
import './App.css';

function App() {
  const [noter, setNoter] = useState(NoteNavn); // Bruker NoteNavn som initialverdi
  const [utvalgte, setUtvalgte] = useState([]); // Holder oversikt over valgte noter

  // Funksjon for å velge en tilfeldig note
  const velgNote = () => {
    console.log("forsåk på å velge en note");
    const tilfeldigNote = noter[Math.floor(Math.random() * noter.length)];
    setUtvalgte((prevUtvalgte) => [...prevUtvalgte, tilfeldigNote]); // Legger til den nye noten
  };

  return (
    <div>
      <button onClick={velgNote}>
        Velg tilfeldig note
      </button>

      <ul className="winners">
        {utvalgte.map((note, index) => (
           <li key={index} className="list-item">
           {/* <p>{note.NoteBokstav}</p> */}
           <img 
             src={note.bilde} 
            //  alt={note.NoteBokstav} 
             style={{ width: "20vh", height: "20vh" }} 
           />
         </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
