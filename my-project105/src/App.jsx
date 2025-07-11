import { useState } from "react";
function App(){
  const date = new Date().toLocaleTimeString()
  const [time,setTime] = useState(date)
  setInterval(updateTime,1000)

  function updateTime (){
    const current = new Date().toLocaleTimeString()

    setTime(current)
  }


  return(
    <div>
      <h1>{time}</h1>
      {/* <button onClick={updateTime} >click me</button> */}
    </div>

  )

}

export default App