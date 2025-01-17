// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from 'react-dom/client'
const image = 'https://picsum.photos/200'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1 className="red" contentEditable="true" spellCheck="true" draggable="true" >Random images</h1>
    <div>      
      <img className='photos' src={image}  alt="random image"/>
      <img className='photos' src={image} alt="random image" />
      <img className='photos' src={image}  alt="random image"/>





    </div>
  </div>
) 