// create a react app from scratch.
// show a single h1 that says "Good morning" 
//Good afternoon or good evening depending on the time
//apply the heading style in the style.css
//dynamically change the colour of the h1 using inline css style
// morning red, afternoon green night blue


import React from "react";
import ReactDOM from 'react-dom/client';

let greeting;
const customStyle = {
  color: ""
}
const date = new Date();
const currentTime = date.getHours()


if(currentTime < 12){
  greeting = "Good Morning"
  customStyle.color = "red"
}
else if(currentTime < 18){
  greeting = "Good Afternoon"
  customStyle.color = "green"

}else{
  greeting = "Good Night"
  customStyle.color = "blue"
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <h1 style={customStyle} className="heading">{greeting}</h1>
)