import React from 'react'

import Note from './components/Note'
import Course from './components/Course'


/* //////////////////////////////////////////
     TUDO FUNCIONANDO
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

/* ///////////////////////////////////////////
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
*/ ///////////// PODE SER UTIL




    // VAMOS DESESTRUTURAR ABAIXO para simplificar!
    //const App = (props) => {
    //const { notes } = props  --- SE TRANSFORMA EM...

    // ABAIXO ESTA DESESTRUTURADO
    const App = ({ notes }) => {

    const linhas = () => notes.map(notess =>
    
        // aqui precisamos usar o key atribute 'note.id' dos objetos no array para saber como re-renderizar o componente, é uma exigencia do REACT
        // <li key = {note.id}>  
        //{note.contend}
        // </li>
     
        // aqui precisa ter o key={notess.id} por causa do react p/ saber como renderizar
         <Note key={notess.id}
               note={notess}
         />
         )// final MAP


    // a variavel RESULTADO esta recebendo o vetor NOTES e nele usamos a função MAP()
    // que dentro do seu argumento ( ) - há uma arrow function que pode ter qualquer nome
    // mas precisa chamar através do ponto " . " p/ acessar o conteudo do vetor...
    // SIM! VAMOS USAR UMA FUNÇÃO QUE CHAMA OUTRA FUNÇÃO COMO ARGUMENTO
    //const resultado = notes.map(notettt => notettt.contend)
   // console.log(resultado)

    return(
        <>
            <h1> Notes </h1>

            <ul>
              {linhas()}
            </ul>
            
        </>
    )// fim return
}// final App


export default App


