const mongoose = require("mongoose")

if (process.argv.length < 3){
  console.log("give password as an argument")
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://ozkarabirand_db_user:${password}@cluster0.tilkwzq.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set("strictQuery", false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLenght: 5,
    required: true
  },
  important: Boolean
})

const Note = mongoose.model("Note", noteSchema)

const note = new Note({
  content: "Mongoose makes things easy",
  important: true
})

note.save().then(res=>{
  console.log("note saved")
  mongoose.connection.close()
})