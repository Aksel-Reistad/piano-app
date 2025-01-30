import React, { useState } from "react";

import './App.css';
import NoteFiner from './JsKode/NoteFiner';
import Notevelger from './JsKode/NoteVelger';
import NoteSjekk from "./JsKode/NoteSjekk";


function App() {
    const [Bokstaver, SeBokstaver] = useState(false); // Delt state for synlighet
  
    // Funksjon for å toggling av bokstaver
    const toggleBokstaver = () => {
      SeBokstaver((prev) => !prev);
    };
  
    return (
      <div>
        {/* NoteVelger-knappen */}
        <Notevelger SyneligBokstaver={toggleBokstaver} />
        
        {/* NoteFiner-komponenten med tilgang til Bokstaver */}
        <NoteFiner Bokstaver={Bokstaver} />
      {/* <NoteSjekk/> */}
      </div>

    );
  }


export default App;




