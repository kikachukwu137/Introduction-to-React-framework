import Emoji from "./components/heading"
import Entry from "./components/entry";
import emojipedia from "./components/emojipedia";


function Card(item){
  return(
    <Entry 
    key={item.id}
    emoji={item.emoji}
    name={item.name}
    meaning={item.meaning}
    />
  )
}

function App(){


  return(
    <div>
      <Emoji/>
       <div className="dictionary">
      {emojipedia.map(Card)}
      </div>

    </div>
  )
}

export default App