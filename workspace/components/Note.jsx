const Note=({note, toggleImportance})=>{
  
  return<>
    <li className="note">
      {note.content}
      <button className="importanceButton" onClick={toggleImportance}>{note.important ? "turn unimportant" : "turn important"}</button>
    </li>
  </> 
  
}
export default Note