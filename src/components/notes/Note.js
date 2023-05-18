import React from "react";
import { ReactDOM } from "react";
import "./Note.css"

export default function Note(props) {

    let text = props.text;

    const [title, setTitle] = React.useState(props.title);
    const [noteHoveredOn, setNoteHoveredOn] = React.useState(false);


    const noteClickHandler = () => {
        setTitle("changed title")
        alert(`title: ${title}` )
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }

    function handleNoteMouseOver(event) {
        setNoteHoveredOn(true)
    }

    function handleNoteMouseOut(event) {
        setNoteHoveredOn(false)
    }

    function deleteHandler() {
        props.deleteNote(props.id)
    }
    
    return (
            <div
                className="note"
                id={props.id}
                onClick={noteClickHandler}
                onMouseOver={handleNoteMouseOver}
                onMouseOut={handleNoteMouseOut}
            >
                { noteHoveredOn && <span className="material-icons check-circle">check_circle</span>}
                <div onChange={titleChangeHandler} className="title">{title}</div>
                <div className="text"> {text}</div>
                <div className="note-footer" style={{visibility: noteHoveredOn ? "visible" : "hidden"}}>
                    <div className="tooltip">
                        <span className="material-icons-outlined hover small-icon">add_alert</span>
                        <span className="tooltip-text">Remind me</span>
                    </div>

                    <div className="tooltip">
                        <span className="material-icons-outlined hover small-icon">person_add</span>
                        <span className="tooltip-text">Collaborator</span>
                    </div>

                    <div className="tooltip">
                        <span className="material-icons-outlined hover small-icon">palette</span>
                        <span className="tooltip-text">Change Color</span>
                    </div>

                    <div className="tooltip">
                        <span className="material-icons-outlined hover small-icon">image</span>
                        <span className="tooltip-text">Add Image</span>
                    </div>

                    <div className="tooltip archive" onClick={deleteHandler}>
                        <span className="material-icons-outlined hover small-icon">archive</span>
                        <span className="tooltip-text">Archive</span>
                    </div>

                    <div className="tooltip">
                        <span className="material-icons-outlined hover small-icon">more_vert</span>
                        <span className="tooltip-text">More</span>
                    </div>
                </div>
            </div>

    )
}