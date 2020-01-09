import React from 'react';
import Header from './components/Header';
import Contend from './components/Contend'




const Course = ({ course }) => {



    return (
    <>

            <Header course = { course }> </Header>
            <Contend course = { course }> </Contend>

    </>
    
    )// fim return

}// fim course




export default Course;




