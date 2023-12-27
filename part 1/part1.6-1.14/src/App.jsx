import { useState } from 'react'
import './App.css'
import Button from './Button'

const StatisticsLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}
const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral != 0) {
    return (
      <table>
        <th>
          <tr><h2>Statistics</h2></tr>
        </th>
        <tbody>
          <tr><StatisticsLine text="good" value={good} /> </tr>
          <tr><StatisticsLine text="bad" value={bad} /></tr>
          <tr><StatisticsLine text="neutral" value={neutral} /></tr>
          <tr> <StatisticsLine text="all" value={good + neutral + bad} /></tr>
          <tr><StatisticsLine text="average" value={(good - bad) / (good + neutral + bad)} /></tr>
          <tr><StatisticsLine text="Positive" value={good / (good + neutral + bad)} /></tr>
        </tbody>
      </table>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
}

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}
export default App
