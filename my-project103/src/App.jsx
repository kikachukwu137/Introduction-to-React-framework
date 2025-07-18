import Login from "./components/login";
import Form from "./components/form";
const verified = false

// function Display(){
//   if (verified === true){
//     return <Login/>
//   }else{
//     return <Form/>
//   }
// }

function App() {
  return (
    <div className="container">
      {verified === true ? <Login/>:<Form/>} //
    </div>
  );
}

export default App;
