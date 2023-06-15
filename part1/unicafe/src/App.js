import { useState } from 'react'
import {FeedbackButton} from "./components/FeedbackButton/FeedbackButton";
import {StatisticLine} from "./components/Statistic/StatisticLine";

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
              <table>
                  <tbody>
                      <StatisticLine value={good} text={"Good"} />
                      <StatisticLine value={neutral} text={"Neutral"} />
                      <StatisticLine value={bad} text={"Bad"} />
                      <StatisticLine value={good + neutral + bad} text={"All"} />
                      <StatisticLine value={(good - bad) / (good + neutral + bad)} text={"Average"} />
                      <StatisticLine value={(100 * good) / (good + neutral + bad)} text={"Positive"} />
                  </tbody>
              </table>
          ) : (
              <p>No feedback given</p>
          )}
      </div>
  )
}

export default App