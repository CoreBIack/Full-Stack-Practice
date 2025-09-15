import axios from "axios";
const getPersons =()=>{
  const req = axios.get(`http://${window.location.hostname}:3001/persons`)
  return req.then(res=>res.data)
}
const addPerson =(newPerson)=>{
  const req = axios.post(`http://${window.location.hostname}:3001/persons`, newPerson)
  return req.then(res=>res.data)
}
const deletePerson=(id)=>{
  return axios.delete(`http://${window.location.hostname}:3001/persons/${id}`)
}
const changeNumber =(id, newPhone)=>{
  const req = axios.put(`http://${window.location.hostname}:3001/persons/${id}`, newPhone)
  return req.then(res=>res.data)
}

export default {getPersons, deletePerson, addPerson, changeNumber}
