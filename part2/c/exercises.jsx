import axios from "axios"
import {useState, useEffect} from "react"
import PersonForm from "../components/PersonForm"
import Filter from "../components/Filter"
import Persons from "../components/Persons"

const App=()=>{
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [filter, setFilter] = useState("")
  
  useEffect(()=>{
    axios.get("http://192.168.1.40:3001/persons").then((res)=>{
      setPersons(res.data)
    })
  },[])

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
      setPersons(persons.concat({name:newName, number:newPhone, id:persons.length + 1}))
    }
    setNewName("")
    setNewPhone("")
  }
  
  return <>
    <h2>Phonebook</h2>
    
    <Filter filter={filter}  onChange={handleFilterInputChange}/>
    
    <h2>Add a new person</h2>
    
    <PersonForm onSubmit={addPerson} 
    nameComp={{name:newName, onChange:handleNameInputChange}} 
    phoneComp={{number:newPhone, onChange:handlePhoneInputChange}}
    />

    <h2>Numbers</h2>
    
    <Persons display={display}/>
  </>
}

export default App