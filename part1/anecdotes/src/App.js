import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [points, setPoints] = useState(Array(6).fill(0))
  const [selected, setSelected] = useState(0)

  const topAnecdote = () => {
    return anecdotes[points.indexOf(Math.max(...points))]
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        {points[selected]} votes
      </div>
      <Button handleClick={() => {const copy = [...points]; copy[selected]+=1; setPoints(copy)}} text="Vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random()*6))} text="Next anecdote"/>
      <br/>
      <h2>Anecdote with most votes</h2>
      <div>
        {topAnecdote()}
      </div>
    </div>
  )
}

export default App