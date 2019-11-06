import React from 'react';
import ReactDOM from 'react-dom';


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
                name: "Fundamentals of React",
                exercises: 10,
                id: 1
            },
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1
            }
        ]// fim parts
    }// fim const

    return (
        <>

        <h1> teste </h1>


        </>
    )// fim retunr

}// fim app





ReactDOM.render(<App />, document.getElementById('root'));


