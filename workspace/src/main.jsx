import ReactDOM from "react-dom/client"
import App from "./App.jsx"

const notes = [
  {id: 1, content:"HTML is easy", important: true}, 
  {id: 2, content:"Browser can only execute Javascript", important: false},
  {id: 3, content:"GET and POST are the most important methods of HTTP protocol", important: true}
]
ReactDOM.createRoot(document.getElementById("root")).render(<App notes={notes}/>)



// part1 c/practice
/*import ReactDOM from 'react-dom/client'

import App from '../../../c/practice'
let counter = 1
const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = ()=>{
  root.render(
    <App counter={counter}/>
  )
}

setInterval(()=>{
  refresh()
  counter+=1
}, 3000)*/