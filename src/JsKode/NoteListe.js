import React, { useState } from "react";


const NoteListe = () => {


    const [notes, setNotes] = useState([
    { NoteBokstav: "c1", bilde: "/Bilder/C1-note.png" },
    { NoteBokstav: "d1", bilde: "/Bilder/D1-note.png" },
    { NoteBokstav: "e1", bilde: "/Bilder/E1-note.png" },
    { NoteBokstav: "f1", bilde: "/Bilder/F1-note.png" },
    { NoteBokstav: "g1", bilde: "/Bilder/G1-note.png" },
    { NoteBokstav: "a1", bilde: "/Bilder/A1-note.png" },
    { NoteBokstav: "h1", bilde: "/Bilder/H1-note.png" },

    { NoteBokstav: "c2", bilde: "/Bilder/C2-note.png" },
    { NoteBokstav: "d2", bilde: "/Bilder/D2-note.png" },
    { NoteBokstav: "e2", bilde: "/Bilder/E2-note.png" },
    { NoteBokstav: "f2", bilde: "/Bilder/F2-note.png" },
    { NoteBokstav: "g2", bilde: "/Bilder/G2-note.png" },
    { NoteBokstav: "a2", bilde: "/Bilder/A2-note.png" },
    { NoteBokstav: "h2", bilde: "/Bilder/H2-note.png" },

    { NoteBokstav: "c3", bilde: "/Bilder/C3-note.png" },
    { NoteBokstav: "d3", bilde: "/Bilder/D3-note.png" },
    { NoteBokstav: "e3", bilde: "/Bilder/E3-note.png" },
    { NoteBokstav: "f3", bilde: "/Bilder/F3-note.png" },
    { NoteBokstav: "g3", bilde: "/Bilder/G3-note.png" },
    { NoteBokstav: "a3", bilde: "/Bilder/A3-note.png" },
    { NoteBokstav: "h3", bilde: "/Bilder/H3-note.png" },

    { NoteBokstav: "c4", bilde: "/Bilder/C4-note.png" },
    { NoteBokstav: "g4", bilde: "/Bilder/G4-note.png" },
]);

const toggleNoteStatus = (noteBokstav) => {
    setNotes(prevNotes =>
        prevNotes.map(note =>
            note.NoteBokstav === noteBokstav
                ? { ...note, aktiv: !note.aktiv } // Bytt status
                : note
        )
    );
};

return (
    <div>
        <h1>NoteBlokker</h1>
        <ul>
            {notes.map(note => (
                <li key={note.NoteBokstav}>
                    <img src={note.bilde} alt={note.NoteBokstav} width={50} />
                    <span>{note.NoteBokstav}</span>
                    <button onClick={() => toggleNoteStatus(note.NoteBokstav)}>
                        {note.aktiv ? "Blokker" : "Avblokker"}
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
};


export default NoteListe;