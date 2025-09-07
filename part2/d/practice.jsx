import {useState, useEffect} from "react"
import Note from "../components/Note.jsx"
import noteService from "./services/notes.js"
const App =(props)=>{
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)
  
  useEffect(()=>{noteService.getAll().then((res)=>{setNotes(res)})}, [])

  const notesOnDisplay = showAll ? notes : notes.filter((note)=>note.important)
  
  const addNote =(event)=>{
    event.preventDefault()
    const notePost = {important: Math.random()<0.5, content: newNote}
    noteService.create(notePost).then((res)=>{
      setNotes(notes.concat(res))
      setNewNote("")
    })
  }

  const handleInputChange=(event)=>{
    console.log("handle input here", event.target.value)
    setNewNote(event.target.value)    
  }

  const toggleImportance=(id)=>{
    const note = notes.find(n=>n.id === id)
    const toggledNote = {...note, important: !note.important}
    noteService.update(id, toggledNote).then((res)=>{
      
      setNotes(notes.map(note=>note.id === id ? res: note))
    }).catch(error=>{
      alert("this note was a glitch and it has been handled")
      setNotes(notes.filter(note=>note.id !== id))
    })
    
  }

  return <>
    <h1>Notes</h1>
    <ul>
      {notesOnDisplay.map((note)=><Note key={note.id} note={note} toggleImportance={()=>{toggleImportance(note.id)}}/>)}
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