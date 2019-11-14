import React from "react";
import ReactDOM from "react-dom";

/*
const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1
            },
            {
                name: "Use props to pass data",
                exercises: 7,
                id: 2
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3
            },
            {
                name: "teste",
                exercises: 66,
                id: 4

            }
        ]// fim parts
    }// fim const

// aqui voce deve sempre usar o console.log
    //console.log('o que esta acontecendo')

    return (
        <>
            <Course course = {course}></Course
        </>
    )// fim return
}// fim app


const Course = ({ course }) => {

    return(
        <>
        <li>{course.name}</li>
        <li>{course[parts].name}         </li>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
*/

// este é o vetor NOTES
const notes = [
  {
    id: 1,
    contend: "Html is easy (and this is not true!)",
    date: 2017,
    important: true
  },
  {
    id: 2,
    contend: "Browser can execute only Javascript",
    date: 2018,
    important: false
  },
  {
    id: 3,
    contend: "GET and POST are the most important methods of HTTP protocol",
    date: 2019,
    important: true
  }
]; // fim notes




const App = props => {
  
    const { notes } = props;
    // METODO INDIVIDUAL ROWS por uma melhor pratica
    const rows = () =>
    notes.map(note => (

      <li key={note.id}>

        {note.contend} , {note.date}

      </li>

    )// fim arrow function
    )// fim MAP
  //precisa colocar ID key, pois o react usa para saber como fazer update

  return (
    <>
      <h1> Notes </h1>

      {/* metodo antiquado e trabalhoso, precisa indexar cada posicao do vetor...impraticavel
            <li>{notes[0].contend} </li>
            <li>{notes[1].contend} </li>
            <li>{notes[2].contend} </li>
            */}

      {/*
        <ul> METODO QUE NAO OBEDECE AS BOAS PRATICAS... melhor separar todos os componentes
         {notes.map(note =>  <li>{note.contend}</li>) }
        </ul> 
        */}

      <ul> {rows()} </ul>
    </>
  ); // fim return
}; // fim app


const resultado = notes.map(coisa => coisa.id); // para testar no console e ver as mensagens
console.log(resultado);


ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
