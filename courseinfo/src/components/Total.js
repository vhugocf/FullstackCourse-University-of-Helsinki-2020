import React from 'react';




const Total = ( {course} ) => {


    const total = course.parts.map((part) => part.exercises).reduce((sum, currentValue) => sum + currentValue) 

    
    return (
        <>

    <h3> Number of exercises: { total } </h3>

        </>
    );
};

export default Total;


