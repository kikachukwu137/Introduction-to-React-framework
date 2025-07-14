// import { useState } from "react";

// function App(){
//   const [isMouseOver, setMouseOver] = useState(false)
//   function handleMouseOver(){
//     setMouseOver(true)
//   }
//   function handleMouseOut(){
//     setMouseOver(false)
//   }
//   return(
//     <div className="container">
//       <input type="text" placeholder="what is your name
//       " />
//       <button 
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//         style={{backgroundColor: isMouseOver ? "black":"white" }}
//         >submit</button>
//     </div>

//   )
// }

// export default App




import { useState } from "react";

function App(){
  const [name,setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleClick(event){
    setName(event.target.value)
  }
  function handleChange(event){
    setHeading(name)
    event.preventDefault()

  }

  return (
    <div className="container">
      <h1>hello {heading}</h1>
      <form onSubmit={handleChange}>
      <input onChange={handleClick}
        type="text"
         placeholder="what is your name"
         value={name}
        
        />
        <button>submit</button>
        </form>

    </div>
  )
}

export default App;















