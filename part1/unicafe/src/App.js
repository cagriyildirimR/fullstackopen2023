import { useState } from 'react'
import {FeedbackButton} from "./components/FeedbackButton/FeedbackButton";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    const handleClick = (value, setValue) => () => {
            setValue(value + 1)
        }

  return (
      <div>
          <h1>Give Feedback</h1>
          <FeedbackButton text={"good"} handleClick={handleClick(good, setGood)}/>
          <FeedbackButton text={"neutral"} handleClick={handleClick(neutral, setNeutral)}/>
          <FeedbackButton text={"bad"} handleClick={handleClick(bad, setBad)}/>
          <h1>Statistics</h1>
          <p>Good: {good} </p>
          <p>Neutral: {neutral} </p>
          <p>Bad: {bad} </p>
          <p>All: {good+neutral+bad}</p>
          <p>Average: { (good-bad) / (good+neutral+bad) }</p>
          <p>Positive: {100 * good / (good+neutral+bad)}</p>
      </div>
  )
}

export default App