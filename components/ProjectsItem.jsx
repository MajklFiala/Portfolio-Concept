import React from 'react'
import '../CSS/ProjectsItem.css'

function ProjectsItem(props) {
  return (
    <div className='itemContainer' style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='seeDiv'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>

      
    </div>
  )
}

export default ProjectsItem
