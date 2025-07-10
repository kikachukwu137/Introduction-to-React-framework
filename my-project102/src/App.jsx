import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./note";
import '../src/App.css'
function Card(item){
  return(
     <Note
        key={item.key}
        title={item.title}
        content={item.content}
        />

  )
}


function App() {
  return (
    <div>
      <Header />
      {notes.map(item => {
        return <Note
          key={item.key}
          title={item.title}
          content={item.content}
        />

      })}
      <Footer />
    </div>
  );
}

export default App;
