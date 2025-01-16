import React from "react";

function NoteVelger({ SyneligBokstaver }) {
  return (
    <div>
      <button onClick={SyneligBokstaver}>Toggle bokstaver</button>
    </div>
  );
}

export default NoteVelger;
