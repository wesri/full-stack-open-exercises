import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => {
  const text=props.text
  const value=props.value
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good=props.good
  const neutral=props.neutral
  const bad=props.bad

  const average = () => {
    return (good - bad) / total()
  }

  const total = () => {
    return good + neutral + bad
  }

  const positivePercentage = () => {
    return (good / total()) + " %" 
  }

  if (total()>0) {
    return (
      <table>
        <tbody>
          <Statistic text="Good" value={good}/>
          <Statistic text="Neutral" value={neutral}/>
          <Statistic text="Bad" value={bad}/>
          <Statistic text="All" value={total()}/>
          <Statistic text="Average" value={average()}/>
          <Statistic text="Positive" value={positivePercentage()}/>
        </tbody>
      </table>
    )
  } else {
    return (<div>No feedback given</div>)
  } 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setBad(bad+1)} text="Bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App