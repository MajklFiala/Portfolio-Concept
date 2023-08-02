import React, { useState } from 'react'
import '../CSS/Skills.css'
import SliderContainer from './SliderContainer';
import percentileCircle from '../images/percentile-circle.svg'
import percentileCircle2 from '../images/percentile-circle2.svg'
import percentileCircle3 from '../images/percentile-circle3.svg'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Skills() {

  const items = [{image: percentileCircle, text: 'Web Design'},
  {image: percentileCircle2, text: 'Web Development'},
  {image: percentileCircle3, text: 'Python'},
  {image: percentileCircle, text: 'HTML, CSS, JS'},
  {image: percentileCircle2, text: 'React'}]

  const[current,setCurrent] = useState(0);
  const [currentPlusOne, setCurrentPlusOne] = useState(1);
  const [currentPlusTwo, setCurrentPlusTwo] = useState(2);

  const Back = () =>{
    setCurrentPlusTwo(currentPlusOne)
    setCurrentPlusOne(current)
    setCurrent(current - 1)
    if(current == 0){
      setCurrent(items.length - 1)
    }
  }

  const Forward = () => {
    setCurrent(currentPlusOne)
    setCurrentPlusOne(currentPlusTwo)
    setCurrentPlusTwo(currentPlusTwo + 1)
    if(currentPlusTwo == (items.length - 1)){
      setCurrentPlusTwo(0)
    }
  }

  return (
    <div className='skillsBox'>
    <div className='skillsContainer' id='skills'>
      <h1>Skills</h1>
      <p>Phasellus faucibus molestie nisl. Mauris elementum mauris vitae tortor. Maecenas sollicitudin. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Maecenas libero. Vivamus porttitor turpis ac leo. Etiam quis quam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className='Carousel'>
        <div className='Icon'>
        <ArrowBackIosIcon onClick={Back} />
        </div>
        <div className='sliderContainerDivOne'>
        <SliderContainer image={items[current].image} text={items[current].text}/>
        </div>
        <div className='sliderContainerDivTwo'>
        <SliderContainer image={items[currentPlusOne].image} text={items[currentPlusOne].text}/>
        </div>
        <div className='sliderContainerDivThree'>
        <SliderContainer image={items[currentPlusTwo].image} text={items[currentPlusTwo].text}/>
        </div>
        <div className='Icon'>
        <ArrowForwardIosIcon onClick={Forward} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills
