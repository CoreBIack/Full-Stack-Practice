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
  Phone.find({}).then(persons=>{res.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${Date()}</p>`)})

})

app.put("/api/persons/:id", (req, res, next)=>{
  const {name, number} = req.body
  Phone.findById(req.params.id).then(phone=>{
    if(!phone){
      return res.status(404).end()
    }
    phone.name = name
    phone.number = number

    return phone.save().then(updatedPhone => res.json(updatedPhone))
  }).catch(err => next(err))
})



app.delete("/api/persons/:id", (req, res, next)=>{
  Phone.findByIdAndDelete(req.params.id)
  .then(result=>{res.status(204).end()})
  .catch(err=>next(err))
})

app.post("/api/persons", (req, res, next)=>{
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
  }).catch(err => next(err))
  }
)

const errorHandler = (err, req, res, next) =>{
  console.log(err.message)
  if(err.name === "CastError"){
    return res.status(400).send({error: "malformatted id"})
  }
  if(err.name === "ValidationError"){
    return res.status(400).send({error: err.message})
  }
  next(err)
}

app.use(errorHandler)
const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log("server runnning on port 5001")
})