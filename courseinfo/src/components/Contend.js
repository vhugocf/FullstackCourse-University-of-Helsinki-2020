import React from "react";
import Part from "./Part";



const Contend = ({ course }) => {

  return (
    <>
      {course.parts.map(part => (
        <Part key={part.name} part={part.name} exercises={part.exercises}>
          {" "}
        </Part>
      ))}
    </>
  );
};

export default Contend;
