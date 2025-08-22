const App = () => {
  console.log("message from component")
  const now = new Date()
  const number1 = 1
  const number2 = 2
  console.log(now, number1+number2)
  const Hello = (props)=>{
    console.log(props)
    return (
      <p>sup {props.name}</p>
    )
  }
  return (
    <div>
      <p>Hello World todays date is {now.toString()}</p>
      <p>and here is another meaningless paragrapgh {number1} + {number2} = {number1 + number2}</p>
      <Hello name="Dude"/>
      <Hello/>
      <Hello/>
      <Hello/>

    </div>
  )
}

export default App