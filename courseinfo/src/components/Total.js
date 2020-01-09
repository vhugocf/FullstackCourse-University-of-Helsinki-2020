import React from "react";


const Total = ({ course }) => {

  const total = course.parts
    .map(part => part.exercises)
    .reduce((sum, valorCorrente) => sum + valorCorrente);



  return (
    <>

      <h1> Total number of exercises  { total } </h1>

    </>
  );

};



export default Total;



