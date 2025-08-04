import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    const total = neutral + bad + good; 

  return (
    <div
    style={{
      margin:'10px',
      padding:'10px',
    }}>
        <h1>Give Feedback: </h1>
   
     <br />
<br />
 <Button
 text = "good"
 handleClick={()=>setGood(prev=>prev + 1)}

 />
 <Button 
 text = "Neutral"
  handleClick={()=> setNeutral(prev=>prev +1 )}

 
 />
<Button 
 text = "Bad"
handleClick={()=>setBad(prev=>prev + 1)}
/>


    <br />
 
{total? <Statistics good={good}
 bad={bad}
 neutral={neutral}
 />:   <div> 
      <h1>
        Statistics</h1>
        <h2>No Feed Back given</h2></div>}
    </div>
  )
}


export default App