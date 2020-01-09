import React from 'react';




const Header = ({ course }) => {
    
    return (
        <>
            <h1>{course.title}</h1>
            <h2> {course.name} </h2>

        </>
    );

};


export default Header;


