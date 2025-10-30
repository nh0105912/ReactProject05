import React from 'react'
import '../Style.css'

const ControlsUI = ({start ,stop ,reset}) => {
  return (
    <div>
        <button onClick={start} id="start">Start</button>
        <button onClick={stop} id="stop">Stop</button>
        <button onClick={reset} id="reset">Reset</button>


    </div>
  )
}

export default ControlsUI