import React from 'react'

//import Note from './components/Note'
//import Course from './components/Course'


/* //////////////////////////////////////////
///////        TUDO FUNCIONANDO
const App = ({ notes }) => {
    const rows = () => notes.map(note =>
        

        <Note
            key = {note.id}
            note = {note}
        />
    )// fim dos arrows notes

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



/*
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
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]// fim parts
    }// fim course


    return(
        <>

            <Course course = {course.parts}> </Course>
           

        </>
    )

}// fim App
*////////////// PODE SER UTIL
////////////////////////////////////////////////////





const App = (props) => {
    const { notes } = props


    const linhas = () => 
    notes.map(note => <li key = {note.id}>  {note.contend} </li>)

    // a variavel RESULTADO esta recebendo o vetor NOTES e nele usamos a função MAP()
    // que dentro do seu argumento ( ) - há uma arrow function que pode ter qualquer nome
    // mas precisa chamar através do ponto " . " p/ acessar o conteudo do vetor
    const resultado = notes.map(notettt => notettt.contend)
    console.log(resultado)



    return(
        <>

            <h1> Notes </h1>

            <br></br>

            <ul>
              { linhas() }
            </ul>

        </>
    )// fim return

}// final App


export default App


