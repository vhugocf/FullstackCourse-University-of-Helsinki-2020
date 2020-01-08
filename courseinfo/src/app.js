import React from "react";

import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      // inicio do 1º registro do vetor
      name: "Half Stack application development",

      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ] // fim de parts 1
    }, // final primeiro registro do vetor

    {
      // inicio do segundo registro do vetor
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ] // fim parts
    } // fim do segundo registro do vetor
  ]; /// FIM GERAL DO CONST COURSE;

  return (
    <>
      {courses.map(course => (
        <Course course={course} key={course.id}>
          {" "}
        </Course>
      ))}
    </>
  );
}; //// FIM

export default App;








/* IGNORE BELOW PLEASE
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

*/
