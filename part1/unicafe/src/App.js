import { useState } from 'react'
import {FeedbackButton} from "./components/FeedbackButton/FeedbackButton";
import {Statistic} from "./components/Statistic/Statistic";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    const handleClick = (value, setValue) => () => setValue(value + 1)

  return (
      <div>
          <h1>Give Feedback</h1>
          <FeedbackButton text={"good"} handleClick={handleClick(good, setGood)} />
          <FeedbackButton text={"neutral"} handleClick={handleClick(neutral, setNeutral)} />
          <FeedbackButton text={"bad"} handleClick={handleClick(bad, setBad)} />
          <h1>Statistics</h1>
          {good || neutral || bad ? (
              <>
                  <Statistic value={good} text={"Good"} />
                  <Statistic value={neutral} text={"Neutral"} />
                  <Statistic value={bad} text={"Bad"} />
                  <Statistic value={good + neutral + bad} text={"All"} />
                  <Statistic value={(good - bad) / (good + neutral + bad)} text={"Average"} />
                  <Statistic value={(100 * good) / (good + neutral + bad)} text={"Positive"} />
              </>
          ) : (
              <p>No feedback given</p>
          )}
      </div>
  )
}

export default App