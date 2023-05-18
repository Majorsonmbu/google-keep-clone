import React from "react";
import { ReactDOM } from "react";
import {uid} from "uid";
import "./Form.css"

export default function Form(props) {

    // const [userInput, setUserInput] = React.useState({
    //     title: "",
    //     text: "",
    // })
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    const [isActiveForm, setIsActiveForm] = React.useState(false)

  

    // function newTitleChangeHandler(event) {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             title: event.target.value,
    //         }
    //     })
    // }

    // function newTextChangeHandler(event) {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             text: event.target.value,
    //         }
    //     })
    // }

    function formClickHandler() {
        setIsActiveForm(true)
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }

    function textChangeHandler(event) {
        setText(event.target.value)
        setIsActiveForm(true)
    }

    function submitFormHandler(event) {
        event.preventDefault()
        // add data to array
        const note = {
            id: uid(),
            title,
            text,
        }
        props.addNote(note)
        setTitle("")
        setText("")
    }

    return (
        <div>
            {
                !isActiveForm ? (
                    <div onClick={formClickHandler} className="form-container inactive-form">
                        <form>
                            <input className="note-text" type="text" placeholder="Take a note..."/>
                            <div className="form-actions">
                                <div className="tooltip">
                                    <span className="material-icons-outlined hover">check_box</span>
                                    <span className="tooltip-text"> New List</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover">brush</span>
                                    <span className="tooltip-text"> New Drawing</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover">image</span>
                                    <span className="tooltip-text"> New Image</span>
                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="form-container active-form">
                        <form onSubmit={submitFormHandler} className="form" id="form">
                            <input onChange={titleChangeHandler} value={title} id="note-title" type="text" className="note-title" placeholder="Title"/>
                            <input onChange={textChangeHandler} value={text} id="note-text" className="note-text" type="text" placeholder="Take a note..." />
                            <div className="icons">
                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">check_box</span>
                                    <span className="tooltip-text"> Remind me</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">check_box</span>
                                    <span className="tooltip-text"> Collaborator</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">paint</span>
                                    <span className="tooltip-text"> Change color</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">paint</span>
                                    <span className="tooltip-text"> Add Image</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">archive</span>
                                    <span className="tooltip-text"> Archive</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">more</span>
                                    <span className="tooltip-text"> More</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">undo</span>
                                    <span className="tooltip-text"> Undo</span>
                                </div>

                                <div className="tooltip">
                                    <span className="material-icons-outlined hover small-icon">redo</span>
                                    <span className="tooltip-text"> Redo</span>
                                </div>
                                <button className="close-btn" type="submit"> Close</button>
                            </div>      
                        </form>
                    </div>
                )
            } 
        </div>
    )
}