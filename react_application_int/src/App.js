import React from "react";
import { useSelector } from "react-redux";
import User from "./components/User";

function App() {

  const user = useSelector((state) => state.user.user);

  return (
    <div>

      <h1>Redux Example</h1>

      <User />

      {user ? (
        <>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <h2>No user logged in</h2>
      )}
    </div>
  );
}

export default App;