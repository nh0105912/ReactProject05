import React, { useEffect ,useState} from 'react'

function Mydate() {
    const [date, setdate] = useState('')
    useEffect(()=>{
        setInterval(() => {
            const updatedDate = new Date()
            setdate(updatedDate.toLocaleTimeString('en-US', { hour12: true }))
        }, 1000);


    },[])



  return (
    <>
    <h3>Date : {date}</h3>
    
    </>
  )
}

export default Mydate