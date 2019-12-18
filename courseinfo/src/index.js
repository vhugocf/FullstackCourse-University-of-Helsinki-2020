import React from "react";
import ReactDOM from "react-dom";
import App from './App';
// todos acima são necessários




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
    contend: "Browser can execute only Javascript (and WebAssembly!)",
    date: 2018,
    important: false
  },

  {
    id: 3,
    contend: "GET and POST are the most important methods of HTTP protocol (oh really?)",
    date: 2019,
    important: true
  }
] // fim notes




















/// metodo final que renderiza a pagina SPA
ReactDOM.render(<App notes={ notes } />, document.getElementById("root"));

