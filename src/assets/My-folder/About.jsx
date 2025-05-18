import React from 'react'
import { useParams } from 'react-router'

function About() {
  const param=useParams()
  return (
    <div>
      im  about page {param.username}
      
    </div>
  )
}

export default About
