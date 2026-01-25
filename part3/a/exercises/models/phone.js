const mongoose = require("mongoose")
const url = process.env.MONGODB_URI

mongoose.set("strictQuery", false)
mongoose.connect(url).then((res)=>{
  console.log("connected to the url")
}).catch(error=>{
  console.log("connection failed", error.message)
})

const phoneSchema = new mongoose.Schema({
  name:{type: String, minlength: 3, required: true
  },
  number:{type: String, minlength: 8, 
    validate:{validator: function(v){
      return /^\d{2, 3}-\d+$/.test(v);
    },
    message: props => `${props.value} is not valid phone number`
  }}
})

phoneSchema.set("toJSON", {
  transform: (document, returnedObject)=>{
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Phone", phoneSchema)

