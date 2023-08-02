import React from 'react'
import '../CSS/SliderContainer.css'


function SliderContainer(props) {
  return (
    <div className='sliderContainer'>
      <img src={props.image}></img>
      <h1>{props.text}</h1>
    </div>
  )
}

export default SliderContainer

