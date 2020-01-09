import React from 'react';

import Header from './Header';
import Content from './Content';
import Total from './Total'



const Course = ({ course }) => {



    return (
    <>

            <Header course =  { course } >    </Header>
            <Content course = { course } >    </Content>
            <Total course =   { course } >    </Total>

    </>
    
    )// fim return

}// fim course




export default Course;




