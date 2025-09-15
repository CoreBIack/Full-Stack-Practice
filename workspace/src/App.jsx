import {useState, useEffect} from "react"
import PersonForm from "../components/PersonForm"
import Filter from "../components/Filter"
import Persons from "../components/Persons"
import phonebookServices from "./services/phonebook"

const App=()=>{
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [filter, setFilter] = useState("")
  
  useEffect(()=>{
    phonebookServices.getPersons().then((res)=>{
      setPersons(res)
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


  const handleAddPerson=(event)=>{
    event.preventDefault()
    let userFlag = false
    for(let i = 0; i < persons.length; i++){      
      if (persons[i].name === newName){
        userFlag = true
        break
      }
    }
    const newPerson = {name:newName, number:newPhone, id:`${persons.length + 1}`}
    if(userFlag){
      const duplicateId = persons.find(p=>p.name === newName).id
      if(window.confirm(`${newName} already in phonebook, Wanna change its number ?`)){
        phonebookServices.changeNumber(duplicateId, newPerson).then(res=>{
          setPersons(persons.map(person=>person.id === duplicateId ? newPerson : person))
        })
      }
      
    }else{
      phonebookServices.addPerson(newPerson).then(res=>{
        setPersons(persons.concat(newPerson))
      })
    }
    setNewName("")
    setNewPhone("")
  }

  const handleDelete=(event)=>{
    const id = event.target.id
    if(window.confirm("Gonna delete")){
      phonebookServices.deletePerson(id).then(res=>{
        setPersons(persons.filter(person=>person.id !== id))
      })
    }
  }

  return <>
    <h2>Phonebook</h2>
    
    <Filter filter={filter}  onChange={handleFilterInputChange}/>
    
    <h2>Add a new person</h2>
    
    <PersonForm onSubmit={handleAddPerson} 
    nameComp={{name:newName, onChange:handleNameInputChange}} 
    phoneComp={{number:newPhone, onChange:handlePhoneInputChange}}
    />

    <h2>Numbers</h2>
    
    <Persons display={display} handleDelete={handleDelete}/>
  </>
}

export default App