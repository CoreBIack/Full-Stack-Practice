const express = require("express")
const app = express()
const morgan = require("morgan")

persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
morgan.token("body", req=>JSON.stringify(req.body))
app.use(express.json(), morgan(":method :url :status :res[content-length] :response-time ms :body"))

app.get("/api/persons", (req, res)=>{
  res.send(persons)
})

app.get("/api/persons/:id", (req, res)=>{
  const person = persons.find(p=>p.id === req.params.id)
  if(!person){
    return res.status(404).json({error:"Missing person"})
  }
  res.send(person)
})

app.get("/info", (req, res)=>{
  res.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${Date()}</p>`)
})

app.delete("/api/persons/:id", (req, res)=>{
  res.send(persons.filter(p=>p.id !== req.params.id))
})

app.post("/api/persons", (req, res)=>{
  const body = req.body
  if(!body.name || !body.number){
    return res.status(400).json({error:"Missing Entry"})
  }
  for(let i = 0;i < persons.length; i += 1){
    if(persons[i].name === body.name){
      return res.status(400).json({error:"Person already existing"})
    }
  }
  const newPerson = {
    id: String(Math.floor(Math.random() * 1000000)),
    name:body.name,
    number:body.number
  }
  persons = persons.concat(newPerson)
  res.json(persons)
})

app.listen(5001, ()=>{
  console.log("server runnning on port 5001")
})