import React, { useState } from 'react';
import { NoteNavn } from './NoteListe'; // Importerer listen med noter
import Notevelger from './NoteVelger';
import '../App.css';

function NoteFiner() {
  const [Bokstaver, SeBokstaver] = useState(false);
  const [noter, setNoter] = useState(NoteNavn); // Bruker NoteNavn som initialverdi
  const [utvalgte, setUtvalgte] = useState([]); // Holder oversikt over valgte noter
  
  // const SeBokstaver =() =>
  //       if (SeBokstaver == true)


  // Funksjon for å velge en tilfeldig note
  const VelgNote = () => {
    console.log("Forsøk på å velge en note");
    if (noter.length === 0) {
      alert("Ingen flere noter igjen!");
      return;
    }
    const tilfeldigNote = noter[Math.floor(Math.random() * noter.length)];
    console.log(tilfeldigNote);
    
    setUtvalgte((prevUtvalgte) => [...prevUtvalgte, tilfeldigNote]); 
    
  // Fjerner valgt note fra listen
    const oppdatertListe = noter.filter((note) => note !== tilfeldigNote); 
    setNoter(oppdatertListe);

  };
  const SyneligBokstaver=()=>{
    SeBokstaver= true
  }

  return (
    <div>
      <button onClick={VelgNote}>Velg tilfeldig note</button>
      <button onClick={() => SeBokstaver((prev) => !prev)}>
        {Bokstaver ? "Skjul bokstaver" : "Vis bokstaver"}
      </button>

      {/* Viser listen over valgte noter */}
      <ul className="winners">
        {utvalgte.map((note, index) => (
          <li key={index} className="list-item">
            <img
              src={note.bilde}
              alt={note.NoteBokstav || "Note"}
              style={{ width: "20vh", height: "20vh" }}
            />
            {Bokstaver && <p>{note.NoteBokstav}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteFiner;
