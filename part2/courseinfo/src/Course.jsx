import React from 'react'
import Header from './Header'
import Content from './Content'

function Course({course}) {
    console.log(course)
  return (
    <div>
{  
   course.map(c => (
        <div key={c.id}>
          <Header header={c} />
          <Content Course={c} /> 
        </div>))
}
    </div>

  )
}

export default Course