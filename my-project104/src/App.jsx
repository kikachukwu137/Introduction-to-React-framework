import Form from "./components/Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegister={userIsRegistered}/>
    </div>
  );
}

export default App;


//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.