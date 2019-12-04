import React from 'react'
import Note from './components/Note'


/*  
//////////////////////TUDO FUNCIONANDO

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
TUDO FUNCIONANDO
*////////////////////////////////

const App = () => {
    const course = {

        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundaments of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'using props to pass data',
                exercises: 7,
                id: 3
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]// fim parts
    }


    //const Course = () => {}



    return(
        //teste
        <>

            <Course>

            </Course>


        </>

    )

}// fim App



export default App






