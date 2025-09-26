const cors = require("cors")
const express = require("express")
const app = express()

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
] 

app.use(express.json(), cors(), express.static("dist"))

app.get("/",(req, res)=>{
  res.send("<h1>Hello World</h1>")
})

app.get("/api/notes", (req, res)=>{
  res.json(notes)
})

const generatedID =()=>{
  
  return String(notes.length > 0 ? Math.max(...notes.map(n=>n.id)) + 1 : 0)
}

app.post("/api/notes", (req, res)=>{
  const body = req.body
  
  if(!body.content){
    return res.status(400).json({error: "Missing Content "})
  }
  const note = {
    content: body.content,
    important: body.important || false,
    id: generatedID()
  }

  console.log(note)

  notes = notes.concat(note)

  res.json(notes)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log(`server listens on port ${PORT}`)
})