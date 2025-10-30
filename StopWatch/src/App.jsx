import React ,{useRef, useState}from 'react'
import ControlsUI from './Components/ControlsUI'
import './Style.css'

function App() {
  const [time, settime] = useState(0)
  const timeRef = useRef(null)

  const startTImer =()=>{
    if(timeRef.current){
      return
    }
    timeRef.current=setInterval(() => {
      settime((prev)=>prev+1)
      
    }, 100);
  }

  const stopTimer =()=>{
    clearInterval(timeRef.current)
    timeRef.current =null
  }

  const resetTime =()=>{
    stopTimer()
    settime(0)
  }
 
  const formatTime =(t)=>{
    const min =Math.floor(t/60);
    const  sec = t%60;
    return `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")} `

  }


  return (
    <div className='card'>
      <h1>Noor Stop Watch</h1>
      <h2 className='time'>{formatTime(time)}</h2>     
      <ControlsUI start={startTImer} stop={stopTimer} reset={resetTime}/>

    </div>
  )
}

export default App