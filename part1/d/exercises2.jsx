import { use, useState } from "react";
const App=()=>{
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState({1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0})
  const [index, setIndex] = useState(0)
  const [highestVoteIndex, setHighestVoteIndex] = useState(0)
  
  const sethighestVoteIndex =()=>{
    
  }

  const handleVoteClick=()=>{
    const copyVotes = {...votes}
    copyVotes[index + 1] += 1
    setVotes(copyVotes)
    let max = 0
    for (let i = 0; i < anecdotes.length; i+=1){
      if (max < copyVotes[i + 1]){
        max = i
      }
    }
    setHighestVoteIndex(max)
  }

  const handleRandomClick=()=>{
    let newIndex
    do{
      newIndex = Math.floor(Math.random() * anecdotes.length)
    }
    while(index === newIndex)
    setIndex(newIndex)
  }

  return<>
    <p>{anecdotes[index]}</p>
    <p>has {votes[index + 1]} votes</p>
    <button onClick={handleVoteClick}>Vote</button>
    <button onClick={handleRandomClick}>Random anectode</button>
    <h1>Anectode with most votes</h1>
    <p>{anecdotes[highestVoteIndex]}</p>
    <p>has {votes[highestVoteIndex+1]}votes</p>

  </>
}
export default App