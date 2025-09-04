import Person from "./Person"
const Persons=({display})=>{
  return <>
    <ul>
      {display.map((person)=><Person key={person.id} name={person.name} number={person.number}/>)}
    </ul>
  </>
}
export default Persons