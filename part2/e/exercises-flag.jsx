import { useEffect, useState } from "react"
import flagServices from "./services/flags"
import Country from "../components/Country"
const App=()=>{
  const [value, setValue] = useState("")
  const [countries, setCountries] = useState([])
  
  useEffect(()=>{
    flagServices.getCountries().then(res=>{
      setCountries(res)
    })
  },[])
  
  const display = value.length > 0 ? countries.filter(country=>country.name.common.toLowerCase().includes(value.toLowerCase())) : []

  const handleChange=(event)=>{
    setValue(event.target.value)
  }
  const handleClick=(event)=>{
    setValue(event.target.value)
  }
  return <>
      <form >
        find countries<input value={value} onChange={handleChange} type="text" />
      </form>
      {display.length <=10 
        ? display.length === 1 
          ? display.map(country=> <Country key={country.area}name={country.name.common} capital={country.capital} area={country.area} languages={country.languages} flag={country.flags.png}/>) 
          : display.map(country=> <li key={country.area}>{country.name.common} <button onClick={handleClick} value={country.name.common}>Show</button></li>) 
        : "Too many matches, specify another filter"}
      
    </>
}

export default App