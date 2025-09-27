import axios from "axios"
const url = "/api/notes"
const getAll =()=>{
  const req = axios.get(url)
  return req.then(res=>res.data)
}

const create =(newNote)=>{
  const req =axios.post(url, newNote)
  return req.then(res=>res.data)
}

const update =(id, newNote)=>{
  const req = axios.put(`${url}/${id}`, newNote)

  return req.then(res=>res.data)
}

export default {getAll, create, update}