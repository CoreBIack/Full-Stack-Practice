const mongoose = require("mongoose")

if (process.argv.length < 3){
  console.log("enter valid command line")
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://ozkarabirand_db_user:${password}@cluster0.tilkwzq.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set("strictQuery", false)
mongoose.connect(url)
const phoneSchema = new mongoose.Schema({
  name:String,
  number:String
})
const Phone = mongoose.model("Phone", phoneSchema)

if (process.argv.length === 3){
  console.log("phonebook:")
  Phone.find({}).then(res=>{
    console.log(res)
    res.forEach(phone=>{
      console.log(phone.name, phone.number)
    })
    mongoose.connection.close()
  })
  
}else{const name = process.argv[3]
const number = process.argv[4]


const phone = new Phone({
  name,
  number
})

phone.save().then(res=>{
  console.log(`add ${res.name} number ${res.number} to phonebook`)
  mongoose.connection.close()
})}

