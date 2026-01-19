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

app.get("/api/notes/:id", (req, res, next) =>{
  Note.findById(req.params.id).then(note => {
    if(!note){
      res.status(404).end()
    }else{
      res.json(note)
    }
  }).catch(error=>next(error))
})

app.put("/api/notes/:id", (req,res, next)=>{
  const {content, important} = req.body
  Note.findById(req.params.id)
    .then(note=>{
      if(!note){
        return res.status(404).end()
      }
      note.content = content
      note.important = important
      
      return note.save().then(updatedNote=>res.json(updatedNote))

    }).catch(err=>next(err))
})

app.delete("/api/notes/:id", (req, res, next) =>{
  Note.findByIdAndDelete(req.params.id)
    .then(result=>res.status(204).end())
    .catch(err => next(err))
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
  }).catch(err => next(err))
})

const errorHandler = (err, req, res, next)=>{
  console.log(err.message)
  
  if (err.name === "CastError"){
    return res.status(400).send({error: "malformatted id"})
  } else if (err.name === "ValidaitonError"){
    return res.status(400).send({error: err.message})
  }

  next(err)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`server listens on port ${PORT}`)
})