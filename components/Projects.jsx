import React from 'react'
import { useState } from 'react'
import '../CSS/Projects.css'
import projectImage from '../Images/projectImage.jpg'
import ProjectsItem from './ProjectsItem'
import projectImage2 from '../Images/projectImage2.jpg'
import projectImage3 from '../Images/projectImage3.jpg'


function Projects() {

  const[active, setActive] = useState(1)

  const projectsArray = [
    {
      image: projectImage,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage,
      title: 'Business Startup',
      text: 'Design and Development'
    },
  ]

  const projectsArrayTwo = [
    {
      image: projectImage2,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage2,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage2,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage2,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage2,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage2,
      title: 'Business Startup',
      text: 'Design and Development'
    },
  ]

  const projectsArrayThree = [
    {
      image: projectImage3,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage3,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage3,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage3,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage3,
      title: 'Business Startup',
      text: 'Design and Development'
    },
    {
      image: projectImage3,
      title: 'Business Startup',
      text: 'Design and Development'
    },
  ]

  return (
    <div className='projectsBox' id='projects'>
      <h1>Projects</h1>
      <p className='textP'>Praesent in mauris eu tortor porttitor accumsan. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Nulla pulvinar eleifend sem. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Etiam quis quam. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Proin in tellus sit amet nibh dignissim sagittis. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Phasellus faucibus molestie nisl. Aenean vel massa quis mauris vehicula lacinia.</p>
      <div className='projectsContainer'>
        <div className='Tabs'>
          <button onClick={() => {setActive(1)}} className={active == 1 ? 'buttonActive' : 'buttonInactive'}>Tab1</button>
          <button onClick={() => {setActive(2)}} className={active == 2 ? 'buttonActive' : 'buttonInactive'}>Tab2</button>
          <button onClick={() => {setActive(3)}} className={active == 3 ? 'buttonActive' : 'buttonInactive'}>Tab3</button>
        </div>
        <div className={active == 1 ? 'firstDivActive' : 'firstDiv'}>
          {projectsArray.map((current) => {return(<ProjectsItem image={current.image} title={current.title} text={current.title}/>)})}
        </div>
        <div className={active == 2 ? 'secondDivActive' : 'secondDiv'}>
        {projectsArrayTwo.map((current) => {return(<ProjectsItem image={current.image} title={current.title} text={current.title}/>)})}
        </div>
        <div className={active == 3 ? 'thirdDivActive' : 'thirdDiv'}>
        {projectsArrayThree.map((current) => {return(<ProjectsItem image={current.image} title={current.title} text={current.title}/>)})}
        </div>
      </div>
    </div>
  )
}

export default Projects
