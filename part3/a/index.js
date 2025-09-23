
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

app.use(express.json())

app.get("/",(req, res)=>{
  res.send("<h1>Hello World</h1>")
})

app.get("/api/notes", (req, res)=>{
  res.json(JSON.stringify(notes))
})

app.post("/api/notes", (req, res)=>{
  const note = req.body
  console.log(req)
  res.json(note)
})

app.listen(5000, ()=>{
  console.log("server listens on port 5000")
})