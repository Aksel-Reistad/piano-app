import React, { useState } from "react";
import { NoteNavn } from "./NoteListe"; // Importerer listen med noter
import "../App.css";

function NoteFiner({ Bokstaver }) {
  const [noter, setNoter] = useState(NoteNavn); // Noteliste
  const [utvalgte, setUtvalgte] = useState([]); // Valgte noter
  const [Ekstra, setEkstra] = useState([]) //FerdigNote

  const VelgNote = () => {
    console.log("Forsøk på å velge en note");
    if (noter.length === 0) {
      alert("Ingen flere noter igjen!");
      return;
    }

    const tilfeldigNote = noter[Math.floor(Math.random() * noter.length)];
    console.log(tilfeldigNote);
    // Oppdaterer utvalkt til den tilfeldigNote
    setUtvalgte(() => [ tilfeldigNote]);
    //alle tidliger noter
    setEkstra((prevEkstra) => [...prevEkstra, tilfeldigNote]);
    //fjerner tilfeldignote fra listen 
    setNoter((prevNoter) => prevNoter.filter((note) => note !== tilfeldigNote));
    // console.log(tilfeldigNote);
    console.log(noter)
    console.log(Ekstra);
    console.log(utvalgte);
  };

  return (
    <div>
      <button onClick={VelgNote}>Velg tilfeldig note</button>

      {/* Viser listen over valgte noter */}
      <ul className="winners">
        {utvalgte.map((note, index) => (
          <li key={index} className="list-item">
            <img
              src={note.bilde}
              alt={note.NoteBokstav || "Note"}
              style={{ width: "20vh", height: "20vh" }}
            />
            {/* Viser bokstaven kun hvis Bokstaver er true */}
            {Bokstaver && <p>{note.NoteBokstav}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteFiner;
