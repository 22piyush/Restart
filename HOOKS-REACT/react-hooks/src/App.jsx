function App() {

  const [val, setVal] = ("Piyush")

  const handleInput =(e)=> {
      setVal(e.target.value);
      
  }



  return (
    <div>

        <input type="text" onChange={handleInput}/>
        <h1>{val}</h1>
    </div>
  );
}

export default App;
