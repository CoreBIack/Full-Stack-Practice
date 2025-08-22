
import { useState } from "react"
const Display =({counter})=><>{counter}</>

const Button=({buttonName, onClick})=><><button onClick={onClick}>{buttonName}</button></>


const App = ()=>{
  const [counter, setCounter] = useState(0)

  const increment = ()=>setCounter(counter + 1)
  const decrement = ()=>setCounter(counter - 1)
  const reset = ()=>setCounter(0)
  return<>
    <p>
      <Display counter={counter}/>
    </p>
    <Button buttonName="Increment" onClick={increment}/>
    <Button buttonName="Decrement" onClick={decrement}/>
    <Button buttonName="Reset" onClick={reset}/>
  </>
}

export default App