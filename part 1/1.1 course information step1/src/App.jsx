import './App.css'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={props.p1} />
      <Part part={props.p2} />
      <Part part={props.p3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.Total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} />
      <Total Total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}
export default App
