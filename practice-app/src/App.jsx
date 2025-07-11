import React, { useState } from "react";

function App() {
  const changeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="First Name"
            onChange={changeHandler}
          />
          <br />

          <input type="text" 
            placeholder="Last Name" 
            onChange={changeHandler} 
          />
          <br />
          
        </form>
      </div>
    </>
  );
}

export default App;
