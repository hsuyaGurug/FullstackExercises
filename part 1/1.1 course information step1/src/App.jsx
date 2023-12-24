import './App.css'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.total}</p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={props.p1} total={props.p1Total} />
      <Part part={props.p2} total={props.p2Total} />
      <Part part={props.p3} total={props.p3Total} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} p1Total={exercises1} p2Total={exercises2} p3Total={exercises3} />
      <Total Total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App
