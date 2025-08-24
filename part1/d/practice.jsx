import { useState } from "react"
const App=()=>{
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick=()=>{
    setAllClicks(allClicks.concat("L"))
    console.log(left)
    setLeft(left+1)
    console.log(left)
    setTotal(total + 1)
  }
  const handleRightClick=()=>{
    setAllClicks(allClicks.concat("R"))
    setRight(right+1)
    setTotal(left+right)
  }
  return <>
    {left}
    <button onClick={handleLeftClick}>Left</button>
    <button onClick={handleRightClick}>Right</button>
    {right}
    <p>{allClicks.join(" ")}</p>
    <p>total {total}</p>
  </>
}
export default App