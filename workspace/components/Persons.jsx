import Person from "./Person"
const Persons=({display, handleDelete})=>{
  return <>
    <ul>
      {display.map((person)=><Person key={person.id} id={person.id} name={person.name} number={person.number} handleDelete={handleDelete}/>)}
    </ul>
  </>
}
export default Persons