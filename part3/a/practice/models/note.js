const mongoose = require("mongoose")
const url = process.env.MONGODB_URI

mongoose.set("strictQuery", false)
mongoose.connect(url)
  .then((res) =>{
    console.log("connected to the url")
  }).catch(error=>{
  console.log("connection failed", error.message)
  });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Note", noteSchema)