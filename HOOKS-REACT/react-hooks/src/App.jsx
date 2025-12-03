function outsideFunction() {
  console.log("Outside Function");
}

function App() {

  function insideFunction() {
    console.log("Inside Function");
  }

  return (
    <div>
      <button onClick={insideFunction}>Inside Fn</button>
      <button onClick={outsideFunction}>Outside Fn</button>
    </div>
  );
}

export default App;
