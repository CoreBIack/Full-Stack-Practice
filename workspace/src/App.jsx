import {useState} from "react"

const App=()=>{
  const [persons, setPersons] = useState([
    {
      name:"Arto Hellas",
      phone:1234567890
    },
    {
      name:"Ardo",
      phone:2345678901
    }
  ])
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [filter, setFilter] = useState("")
  
  const handleNameInputChange=(event)=>{
    setNewName(event.target.value)
  }
  const handlePhoneInputChange=(event)=>{
    setNewPhone(event.target.value)
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
      setPersons(persons.concat({name:newName, phone:newPhone}))
    }
    setNewName("")
    setNewPhone("")
  }
  const handleFilterInputChange=(event)=>{
    setFilter(event.target.value)
  }
  return <>
    <h2>Phonebook</h2>
    Filter by name: <input value={filter} onChange={handleFilterInputChange}/>
    <h2>Add a new person</h2>
    <form onSubmit={addPerson}>
      <div>name: <input  value={newName} onChange={handleNameInputChange}/></div>
      <div>phone: <input  value={newPhone} onChange={handlePhoneInputChange}/></div>
      <button type="submit">
        Add
      </button>
    </form>
    <h2>Numbers</h2>
    <ul>
      {persons.map((person)=><li key={person.name}>{person.name} {person.phone}</li>)}
    </ul>
  </>
}

export default App