import {useState} from "react"
import Note from "../components/Note.jsx"
const App =(props)=>{
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)
  
  const notesOnDisplay = showAll ? notes : notes.filter((note)=>note.important)

  const addNote =(event)=>{
    event.preventDefault()
    const newNotes = notes.concat({important: Math.random()<0.5, id: String(notes.length + 1), content: newNote})
    setNotes(newNotes)
    setNewNote("")
  }

  const handleInputChange=(event)=>{
    console.log("handle input here", event.target.value)
    setNewNote(event.target.value)    
  }

  
  return <>
    <h1>Notes</h1>
    <ul>
      {notesOnDisplay.map((note)=><Note key={note.id} note={note} />)}
    </ul>
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleInputChange}/>
      <button  type="submit">Add note</button>
    </form>
    <button onClick={()=>{
      setShowAll(!showAll)
    }}>Show {showAll ? "Important" : "All"}</button>
  </>
}
export default App