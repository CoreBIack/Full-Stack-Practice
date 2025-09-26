import axios from "axios"
const url = "/api/notes"
const getAll =()=>{
  const req = axios.get(url)
  const nonExisting = {
    id:10000,
    content:"this note is not saved to server",
    important:true
  }
  return req.then(res=>res.data.concat(nonExisting))
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