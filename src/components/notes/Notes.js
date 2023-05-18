import React from "react";
import { ReactDOM } from "react";
import Note from "./Note"; 


export default function Notes(props) {

    return (
        <div className="notes">
            {
                props.notes.length === 0  &&  <p>Notes you add will appear here.</p>
            }

            {
                props.notes.length !== 0 && props.notes.map((note,index) => (
                    <Note key={index} id= {note.id} title={note.title} text={note.text} deleteNote={props.deleteNote}/>
                )) 
            }
           
        </div>
    )
}