import { use } from "react"
import {useState} from "react"
import Person from "../components/Person"
import Name from "../components/Name"
import Phone from "../components/Phone"
import Filter from "../components/Filter"

const App=()=>{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [filter, setFilter] = useState("")
  
  const display =  persons.filter((person)=>person.name.substring(0, filter.length).toLowerCase() === filter)

  const handleNameInputChange=(event)=>{
    setNewName(event.target.value)
  }
  const handlePhoneInputChange=(event)=>{
    setNewPhone(event.target.value)
  }
  const handleFilterInputChange=(event)=>{
    setFilter(event.target.value)
  }


  const addPerson=(event)=>{
    event.preventDefault()
    let userFlag = false
    for(let i = 0; i < persons.length; i++){      
      if (persons[i].name === newName){
        userFlag = true
        break
      }
    }
    if(userFlag){
      alert(`${newName} already in phonebook`)
    }else{
      setPersons(persons.concat({name:newName, phone:newPhone, id:persons.length + 1}))
    }
    setNewName("")
    setNewPhone("")
  }
  
  return <>
    <h2>Phonebook</h2>
    <Filter filter={filter}  onChange={handleFilterInputChange}/>
    <h2>Add a new person</h2>
    <form onSubmit={addPerson}>
      <Name name={newName} onChange={handleNameInputChange}/>
      <Phone number={newPhone} onChange={handlePhoneInputChange}/>
      <button type="submit">
        Add
      </button>
    </form>
    <h2>Numbers</h2>
    <ul>
      {display.map((person)=><Person key={person.id} name={person.name} number={person.number}/>)}
    </ul>
  </>
}

export default App