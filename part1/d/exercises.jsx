import { useState } from "react"
const StatisticsLine=(props)=>{
  return<>
    <tr>
            <td>{props.data}</td>
            <td>{props.value}</td>
          </tr>
  </>
}
const DisplayStatistics=(props)=>{
  if (props.all === 0){
    return<>
      <p>No feedback given</p>
    </>
  }
  else{
    return<>
      <table>
        <tbody>
          <StatisticsLine data="good" value={props.statistics.good}/>
          <StatisticsLine data="neutral" value={props.statistics.neutral}/>
          <StatisticsLine data="bad" value={props.statistics.bad}/>
          <StatisticsLine data="all" value={props.all}/>
          <StatisticsLine data="average" value={Math.round(props.average * 10) / 10}/>
          <StatisticsLine data="positive" value={Math.round(props.positive * 10) / 10}/>
        </tbody>
      </table>
    </>
  }
}

const Button =({onClick, tag})=>{
  return<>
    <button onClick={onClick}>{tag}</button>
  </>
}

const App =()=>{
  const [statistics, setStatistics] = useState({good:0, neutral:0, bad:0})
  const [all, setAll] = useState(statistics.good + statistics.neutral + statistics.bad)
  const [average, setAverage] = useState((statistics.good - statistics.bad)/3)
  const [positive, setPositive] = useState(statistics.good/all*100)

  const handleGoodClick =()=>{
    setStatistics({...statistics, good:statistics.good+1})
    setAll(all + 1)
    setAverage(average + 1/3)
    const newPositive = (statistics.good + 1)/(all+1)*100
    setPositive(newPositive)
  }
  const handleNeutralClick =()=>{
    setStatistics({...statistics, neutral:statistics.neutral+1})
    setAll(all + 1)
    const newPositive = (statistics.good)/(all+1)*100
    setPositive(newPositive)
  }
  const handleBadClick =()=>{
    setStatistics({...statistics, bad:statistics.bad+1})
    setAll(all + 1)
    setAverage(average - 1/3)
    const newPositive = (statistics.good)/(all+1)*100
    setPositive(newPositive)
  }
  return <>
    <h1>give feedback</h1>
    <Button onClick={handleGoodClick} tag="good"/>
    <Button onClick={handleNeutralClick} tag="neutral"/>
    <Button onClick={handleBadClick} tag="bad"/>
    <h1>statistics</h1>
    <DisplayStatistics all={all} average={average} positive={positive} statistics={statistics}/>
  </>
}
export default App