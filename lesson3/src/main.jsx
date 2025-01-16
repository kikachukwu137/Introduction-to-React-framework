// create a react app from scratch
//it should display 2 paragraphy HTML elements
//the paragraphs should say
//created by yourname
//copyright currentyear


import React from "react";
import ReactDOM from 'react-dom';
const name = " Egwaoje Daniel" ;
const year = new Date().getFullYear()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <p>created by {name}</p>
    <p> copyright {year}</p>
  </div>
)