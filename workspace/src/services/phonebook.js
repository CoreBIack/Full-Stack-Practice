import axios from "axios";
const url = "/api/persons"
const getPersons =()=>{
  const req = axios.get(url)
  return req.then(res=>res.data)
}
const addPerson =(newPerson)=>{
  const req = axios.post(url, newPerson)
  return req.then(res=>res.data)
}
const deletePerson=(id)=>{
  return axios.delete(`${url}/${id}`)
}
const changeNumber =(id, newPhone)=>{
  const req = axios.put(`${url}/${id}`, newPhone)
  return req.then(res=>res.data)
}

export default {getPersons, deletePerson, addPerson, changeNumber}
