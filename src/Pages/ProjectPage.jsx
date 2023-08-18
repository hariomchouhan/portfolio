import React from 'react'
import Projects from '../Components/Projects'

const ProjectPage = ({ projectData }) => {
  return (
    <div className='my-14 mt-16'>
    <Projects data={projectData} />
    </div>
  )
}

export default ProjectPage
