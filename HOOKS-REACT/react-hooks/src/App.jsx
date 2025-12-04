import User from "./User";

function App() {

  let userName = "Anil Sidhu";
  let age = 23;
  let email = "piyush@1234";

  return (
    <div>
        <User name={userName}  age={age}  email={email}/>
    </div>
  );
}

export default App;
