import { useState } from "react";
function App(){
  const[input,setInput] = useState("");
  const[name, setName] = useState("")
  function handleClick(event){

    setInput(event.target.value)
  }
  function handleChange(){
    setName(input)

  }
  return(
    <div className="Container">
      <h1>hello {name} {input}</h1>
      <input type="text" onChange={handleClick} value={input} placeholder="what is your name" />
      <button onClick={handleChange}>submit</button>

    </div>

  )
}
export default App

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




// import { useState } from "react";

// function App(){
//   const [name,setName] = useState("");
//   const [heading, setHeading] = useState("");

//   function handleClick(event){
//     setName(event.target.value)
//   }
//   function handleChange(event){
//     setHeading(name)
//     event.preventDefault()

//   }

//   return (
//     <div className="container">
//       <h1>hello {heading}</h1>
//       <form onSubmit={handleChange}>
//       <input onChange={handleClick}
//         type="text"
//          placeholder="what is your name"
//          value={name}
        
//         />
//         <button>submit</button>
//         </form>

//     </div>
//   )
// }

// export default App;





/*
import { useState } from "react";

function App(){
const [contact,setContact] = useState({
  fname: "",
  lname: "",
  email: ""
});
function handleChange(event){
  const {name, value} =  event.target;
  setContact((prevValue)=>{
    if(name === "fname"){
      return {
        fname: value,
        lname:prevValue.lname,
        email:prevValue.email
      }
    }
     if(name === "fname"){
      return {
        fname: value,
        lname:prevValue.lname,
        email:prevValue.email
      }
    }
     if(name === "fname"){
      return {
        fname: value,
        lname:prevValue.lname,
        email:prevValue.email
      }
    }
      else if (name === "lname"){
      return {
        lname: value,
        fname:prevValue.fname,
        email:prevValue.email
      }
    }
     else if (name === "email"){
      return {
        email: value,
        fname:prevValue.fname,
        lname:prevValue.lname
      }
    }
    
  })


}
return(
  <div className="container">
    <h1>{contact.fname} {contact.lname}</h1>
    <p>{contact.email}</p>
    <form action="">
      <input type="text" name="fname"  value={contact.fname} placeholder="your first Name" onChange={handleChange}/>
      <input type="text"  name="lname" value={contact.lname} placeholder="your last name" onChange={handleChange}/>
      <input type="text" name="email" value={contact.email} placeholder="email" onChange={handleChange} />

    </form>
  </div>
)}
export default App;







*/
