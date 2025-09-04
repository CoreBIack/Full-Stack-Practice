import {useState, useEffect} from "react"
import Note from "../components/Note.jsx"
import axios from "axios"
const App =(props)=>{
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)
  useEffect(()=>{
    axios.get("http://192.168.1.40:3001/notes").then((res)=>{
      setNotes(res.data)
    })
  }, [])
  const notesOnDisplay = showAll ? notes : notes.filter((note)=>note.important)

  const addNote =(event)=>{
    event.preventDefault()
    const notePost = {important: Math.random()<0.5, content: newNote}
    axios.post("http://192.168.1.40:3001/notes", notePost).then((res)=>{
      console.log(res)
      setNotes(notes.concat(res.data))
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
    axios.put(`http://192.168.1.40:3001/notes/${id}`, toggledNote).then((res)=>{
      setNotes(notes.map(note=>note.id === id ? res.data : note))
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