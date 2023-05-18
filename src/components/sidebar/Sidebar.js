
import React from "react";
import ReactDOM  from "react";
import "./Sidebar.css"

export default function Sidebar() {

    return (
       <div className="sidebar">
            <div className="sidebar-item active-item">
                <span className="material-icons-outlined hover active">lightbulb</span>
                <span className="sidebar-text">Notes</span>
            </div>

            <div className="sidebar-item">
                <span className="material-icons-outlined hover active">notifications</span>
                <span className="sidebar-text">Reminders</span>
            </div>

            <div className="sidebar-item">
                <span className="material-icons-outlined hover active">edit</span>
                <span className="sidebar-text">Edit Labels</span>
            </div>

            <div className="sidebar-item">
                <span className="material-icons-outlined hover active">archive</span>
                <span className="sidebar-text">Archive</span>
            </div>

            <div className="sidebar-item">
                <span className="material-icons-outlined hover active">delete</span>
                <span className="sidebar-text">Trash</span>
            </div>
       </div>

    )
}