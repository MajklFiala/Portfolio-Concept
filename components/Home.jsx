import React, { useContext, useEffect, useRef, useState } from 'react'
import '../CSS/Home.css'
import HeaderPicture from '../Images/header-picture.jpg'

function Home() {

  const [arrayNum, setArrayNum] = useState(0);
  const array = ["Web developer", "Web designer", "UI/UX designer"];
  const [text, setTetxt] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200 - Math.random() * 100)
  const period = 2000;

  const tick = () => {
    let i = arrayNum % array.length;
    let fullText = array[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    setTetxt(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }
    if(!isDeleting && updatedText == fullText){
      setIsDeleting(true)
      setDelta(period)

    }
    else if(isDeleting && updatedText== ''){
      setIsDeleting(false)
      setArrayNum(arrayNum + 1)
      setDelta(500)
    }
  }



  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta)

    return() => {clearInterval(ticker)}
  }, [text])


  const [coords,setCoords] = useState({});
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)

    return() => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, )

    const handleMouseMove = (event) =>{
      const x = (event.clientX - window.innerWidth / 2) / window.innerWidth
      const y = (event.clientY - window.innerHeight / 2) / window.innerHeight
      setCoords({x: x, y: y})

      ref.current.style.transform= `rotateX(${(coords.x * 50)}deg) rotateY(${(coords.y * -50)}deg) translateZ(50px) perspective(1000px)`
    }

const ref = useRef();




  return (
    <div className='container' id='home'>
      <div className='Left'>
        <h3>Welcome to my portfolio</h3>
        <h1>Hi! I'm Michael {text}</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar. Fusce aliquam vestibulum ipsum. Nullam at arcu a est sollicitudin euismod. Nulla non arcu lacinia neque faucibus fringilla. Integer vulputate sem a nibh rutrum consequat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam dapibus fermentum ipsum. In rutrum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Etiam posuere lacus quis dolor.</p>
      </div>
      <div className='Right'>
        <div className='Image' >
        <img ref={ref}  src={HeaderPicture}></img>
        </div>
      </div>
    </div>
  )
}

export default Home
