import { useState } from "react";

function App(){
  const [heading, setHeading] = useState("hello")
  const[isMoveOver ,setIsMoveOver] = useState(false)

  function Heading(){
    setHeading("submitted");
  }

  function handleClick(){
    
    setIsMoveOver(true)
  }
  function returnState(){
    setIsMoveOver(false)
  }
  
  return(
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button  onClick={Heading} onMouseOver={handleClick} onMouseOut={returnState}  style={{backgroundColor:isMoveOver ? "black" : "white"}}>submit</button>
    </div>

  )
}

export default App;