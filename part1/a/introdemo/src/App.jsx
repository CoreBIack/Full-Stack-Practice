/*const App = () => {
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

export default <App>*/
/*
const Header = (props)=>{
  return <>
    <h1>{props.course}</h1>
  </>
}
const Part = (props)=>{
  return<>
    <p>
      {props.part} {props.exercises}
    </p>
  </>
}
const Content = (props) => {
  return <>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
  </>
}
const Total = (props)=>{
  return <>
    <p>
      Total number of exercises = {props.exercises1 + props.exercises2 +props.exercises3}
    </p>
  </>
}
const App = ()=>{
  const course = "Half Stack application Development"
  const part1 = "Fundamentels of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of component"
  const exercises3 = 14
  return <>
    <Header course={course}/>
    <Content part1={part1}part2={part2}part3={part3}exercises1={exercises1}exercises2={exercises2}exercises3={exercises3}/>
    <Total exercises1={exercises1}exercises2={exercises2}exercises3={exercises3}/>
  </>
}

export default App
*/
const Header = (props)=>{
  return <>
    <h1>{props.course.name}</h1>
  </>
}
const Part = (props)=>{
  return<>
    <p>
      {props.name} {props.exercises}
    </p>
  </>
}
const Content = (props) => {
  return <>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
      
  </>
}
const Total = (props)=>{
  return <>
    <p>
      Total number of exercises = {props.course.parts[0].exercises + props.course.parts[1].exercises +props.course.parts[2].exercises}
    </p>
  </>
}
const App = ()=>{
  const course = {
    name: "Half Stack application Development",
    parts: [
      {
      name: "Fundamentels of React",
      exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of component",
        exercises: 14
      }
    ]
  }
  return <>
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course}/>
  </>
}

export default App