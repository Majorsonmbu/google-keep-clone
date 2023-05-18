import React from "react";
import { ReactDOM } from "react";
import "./Modal.css"


export default function Modal(props) {
    return (
         <div className={`modal ${props.isModalOpen ? "open-modal" : ""}`}>
            <div className="form-container">
                <form className="form" id="modal-form">
                    <input id="modal-title" type="text" className="note-title" placeholder="Title"/>
                    <input id="modal-text" type="text" className="note-text" placeholder="Take a note..."/>
                    <div className="form-actions">
                        <div className="icons">
                            <div className="tooltip">
                                <span className="material-icons-outlined hover small-icons"></span>
                                <span className="tooltip-text"> Remind me</span>
                            </div>

                            <div className="tooltip">
                                <span className="material-icons-outlined hover small-icons">person_add</span>
                                <span className="tooltip-text"> Collaborator</span>
                            </div>

                            <div className="tooltip">
                                <span className="material-icons-outlined hover small-icons">palette</span>
                                <span className="tooltip-text"> Change Color</span>
                            </div>

                            <div className="tooltip">
                                <span className="material-icons-outlined hover small-icons">archive</span>
                                <span className="tooltip-text"> Archive</span>
                            </div>

                            <div className="tooltip">
                                <span className="material-icons-outlined hover small-icons">more_vert</span>
                                <span className="tooltip-text"> More</span>
                            </div>

                            <div className="tooltip">
                                <span className="material-icons-outlined hover small-icons">undo</span>
                                <span className="tooltip-text"> Undo</span>
                            </div>

                            <div className="tooltip">
                                <span className="material-icons-outlined hover small-icons">redo</span>
                                <span className="tooltip-text"> Redo</span>
                            </div>
                        </div>
                        <button className="close-btn" id="modal-btn">Close</button>
                    </div>
                </form>
            </div>
         </div>
    )
}