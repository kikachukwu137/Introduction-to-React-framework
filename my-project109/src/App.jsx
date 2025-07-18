import {useState} from 'react';
import Items from './component/items';

function App(){
  const [text, setText] = useState("");
  const [items,setItem] = useState([])

  function handleClick(event){
    setText(event.target.value)
  }
  function  addItems(){
    setItem((prev)=>{
      return [...prev,
        text
      ]

    })
     setText("")
  }


  return(
    <div>
      <h1>To do list</h1>
      <input onChange={handleClick} placeholder="add new items"  value={text} type="text" />
      <button onClick={addItems}>add</button>

      <ul>
        {items.map((item)=>{
          return <Items text={item}/>
           
        })}

      </ul>
    </div>
  )
}

export default App
