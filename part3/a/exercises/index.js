require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const Phone = require("./models/phone")

morgan.token("body", req=>JSON.stringify(req.body))
app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] :response-time ms :body"))
app.use(express.static("dist"))
app.get("/api/persons", (req, res)=>{
  Phone.find({}).then(phones=>res.json(phones))
})

app.get("/api/persons/:id", (req, res)=>{
  Phone.findById(req.params.id).then(phone=>res.json(phone))
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
  
  /*
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
  res.json(person)*/

  const newPhone = new Phone({
    name: body.name,
    number: body.number
  })
  newPhone.save().then(saved=>{
    res.json(saved)
  })
  }
)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log("server runnning on port 5001")
})