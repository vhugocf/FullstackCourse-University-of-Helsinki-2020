import React from "react";




const Total = ({ course }) => {
  const total = course.parts
    .map(part => part.exercises)
    .reduce((sum, valorCorrente) => sum + valorCorrente);

  return (
    <>
      <i>   
        <h4> Total number of exercises in this section: {total} </h4>
      </i>
    </>
  );
};

export default Total;
