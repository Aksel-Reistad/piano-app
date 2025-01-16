import React, { useState } from "react";
import NoteListe from "./NoteListe";
import "../App.css";

function NoteFiner({ Bokstaver }) {
  const [noter, setNoter] = useState(NoteListe); // NoteListe
  const [utvalgte, setUtvalgte] = useState([]); // Valgte noter

  const VelgNote = () => {
    if (noter.length === 0) {
      alert("Ingen flere noter igjen!");
      return;
    }
    const tilfeldigNote = noter[Math.floor(Math.random() * noter.length)];

    // Oppdaterer state for valgte noter og gjenværende noter
    setUtvalgte((prevUtvalgte) => [...prevUtvalgte, tilfeldigNote]);
    setNoter((prevNoter) => prevNoter.filter((note) => note !== tilfeldigNote));
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
