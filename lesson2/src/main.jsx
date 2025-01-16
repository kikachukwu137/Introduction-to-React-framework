import React from "react";
import ReactDOM from 'react-dom';

const fName = "Victor";
const lName = "frank"
const number = 10;

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    
    <p>hello {`${fName} ${lName}`}, Happy  {number} year Anniversary </p>
  </div>
)


