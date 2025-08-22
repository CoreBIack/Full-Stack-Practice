import ReactDOM from "react-dom/client"
import App from "./App.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(<App />)



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