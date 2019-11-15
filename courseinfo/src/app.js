import React from 'react'
import Note from './components/Note'



const App = ({ notes }) => {

    const rows = () => notes.map(note =>
        
        <Note
        
            key = {note.id}
            note = {note}
    
        />
    )// fim arrow note
        return(
            <>
                <h1> Notes in progress... </h1>
                <ul>
                    {rows()}
                </ul>
            </>
        )// fim return
}// fim const


export default App






