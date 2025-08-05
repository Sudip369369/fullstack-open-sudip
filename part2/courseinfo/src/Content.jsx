import React from 'react'
import Part from './Part'

function Content({Course}) {
    console.log(Course)
    const total = Course.parts.reduce((sum,part)=> sum + part.exercises,0)
  return (
    <div>
{
 Course.parts.map((part,index) => (
  <Part key={index} name={part.name} exercises={part.exercises} />
))
   } 
   <p> Total of {total} exercises</p>

    </div>
  )
}

export default Content