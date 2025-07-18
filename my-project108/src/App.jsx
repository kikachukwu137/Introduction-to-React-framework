import { useState } from "react";

function App(){
  const [contact,setContact] = useState({
    fname: "",
    lname:"",
    email: ""
  });
  function handleChange(event){
    const {name, value} = event.target;
     setContact(prevalue=>{
      return {
        ...prevalue,
        [name] : value
      }
    //   if(name === 'fname'){
    //     return {
    //       fname: value,
    //       lname: prevalue.lname,
    //       email: prevalue.email
    //     }
    //   }
    //   else if(name === 'lname'){
    //     return {
    //       lname: value,
    //       fname: prevalue.fname,
    //       email: prevalue.email
    //     }
    //   }
    //   else if(name === 'email'){
    //     return {
    //       fname: prevalue.fname,
    //       lname: prevalue.lname,
    //       email: value
    //     }
    //   }

     })



  }
  return(
    <div>
      <h1>hello {contact.fname} {contact.lname}</h1>
      <p>{contact.email}</p>
      <input type="text" name="fname" onChange={handleChange} value={contact.fname}/>
      <input type="text" name="lname" onChange={handleChange} value={contact.lname}/>
      <input type="email" name="email"onChange={handleChange}  value={contact.email}/>
      <button>submit</button>
    </div>
  )
}

export default App