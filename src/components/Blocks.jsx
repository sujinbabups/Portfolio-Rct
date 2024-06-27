import React from 'react'
import Education from './Education'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

function Blocks() {
  return (
    <>
    <div>
    <div className="flex">
      <Education/>
      <Skills/>
    </div>
    <div className="flex">
      <Project/>

      <Contact/>
    </div>
    </div>

    </>
  )
}

export default Blocks