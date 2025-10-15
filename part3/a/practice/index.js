require("dotenv").config()
const express = require("express")
const app = express()
const Note = require("./models/note")


app.use(express.json())
app.use(express.static("dist"))

app.get("/api/notes", (req, res)=>{
  Note.find({}).then(notes => {
    res.json(notes)
  })
})

app.get("/api/notes/:id", (req, res) =>{
  Note.findById(req.params.id).then(note => {
    res.json(note)
  })
})

app.put("/api/notes/:id", (req,res)=>{
  const body = req.body
  const id = req.params.id
  notes = notes.map(n=>n.id === id ? body : n)
  res.json(req.body)
})



app.post("/api/notes", (req, res)=>{
  const body = req.body
  
  if(!body.content){
    return res.status(400).json({error: "Missing Content "})
  }
  /*const note = {
    content: body.content,
    important: body.important || false,
    id: generatedID()
  }

  console.log(note)

  notes = notes.concat(note)

  res.json(note)*/

  const note = new Note({
    content: body.content,
    important: body.important
  })
  note.save().then(saved=>{
    res.json(saved)
  })
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`server listens on port ${PORT}`)
})