const Person =({name, number, id, handleDelete})=>{
  return <li>{name} {number} 
  <button id={id} onClick={handleDelete}>
    Delete
  </button>
  </li>
}
export default Person