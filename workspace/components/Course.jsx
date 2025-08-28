const Course =({course})=>{
  const totalExercises = course.parts.reduce((acc, part)=>acc + part.exercises, 0)
  return <>
    <h1>{course.name}</h1>
    <ul>{course.parts.map(part=> <li key={part.id}>{part.name} {part.exercises}</li>)}
    </ul>
    <h2>total of {totalExercises} exercises</h2>
  </>
}
export default Course