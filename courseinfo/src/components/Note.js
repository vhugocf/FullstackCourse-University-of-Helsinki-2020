import React from 'react'


const Note = ({ note }) => {




    return(
    <>
        <ol>
        <li> 
           
            {note.contend}

            {note.date}

        </li>
       </ol>


    </>
    )
}// fim Note



export default Note

