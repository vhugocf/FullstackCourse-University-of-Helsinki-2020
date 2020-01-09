import React from 'react';

import Header from './Header';
import Content from './Content';




const Course = ({ course }) => {



    return (
    <>

            <Header course = { course }> </Header>
            <Content course = { course }> </Content>

    </>
    
    )// fim return

}// fim course




export default Course;




