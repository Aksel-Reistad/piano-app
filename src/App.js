import './App.css';
import NoteFiner from './JsKode/NoteFiner';
import Notevelger from './JsKode/NoteVelger';

function App() {
return(
<div>
<NoteFiner/>
<Notevelger/>

</div>

);
}

export default App;













// import React, { useState } from 'react';
// import { NoteNavn } from './JsKode/NoteListe'; // Importerer listen med noter
// import './App.css';

// function App() {
//   const [noter, setNoter] = useState(NoteNavn); // Bruker NoteNavn som initialverdi
//   const [utvalgte, setUtvalgte] = useState([]); // Holder oversikt over valgte noter

//   // Funksjon for å velge en tilfeldig note
//   const VelgNote = () => {
//     console.log("Forsøk på å velge en note");
//     if (noter.length === 0) {
//       alert("Ingen flere noter igjen!");
//       return;
//     }
//     const tilfeldigNote = noter[Math.floor(Math.random() * noter.length)];
//     console.log(tilfeldigNote);
    
//     setUtvalgte((prevUtvalgte) => [...prevUtvalgte, tilfeldigNote]); 
    
//   // Fjerner valgt note fra listen
//     const oppdatertListe = noter.filter((note) => note !== tilfeldigNote); 
//     setNoter(oppdatertListe);
//   };

//   return (
//     <div>
//       <button onClick={VelgNote}>
//         Velg tilfeldig note
//       </button>
      

//       {/* Viser listen over valgte noter */}
//       <ul className="winners">
//         {utvalgte.map((note, index) => (
//           <li key={index} className="list-item">
//             {/* <p>{note.NoteBokstav}</p> */}
//             <img
//               src={note.bilde}
//               alt={note.NoteBokstav || "Note"}
//               style={{ width: "20vh", height: "20vh" }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
