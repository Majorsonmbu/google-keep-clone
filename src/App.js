import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar"
import Form from "./components/form/Form"
import Notes from "./components/notes/Notes"
import Modal from "./components/modal/Modal";

function App() {

  const NOTES = [
    // {
    //   id:"a123",
    //   title:"some title1",
    //   text: "some text1"
    // },

    // {
    //   id:"a123",
    //   title:"some title1",
    //   text: "some text1"
    // },
  
  ]

  const [notes, setNotes] = React.useState(NOTES)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  function addNote(note) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        note
      ]
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => id !== note.id)
    })
  }

  return (
    <>
     <Navbar/>
     <Sidebar/>
     <Form addNote={addNote}/>
     <Notes notes={notes} deleteNote={deleteNote}/>
     <Modal isModalOpen={isModalOpen}/>
    </>
  
  );
}

export default App;
