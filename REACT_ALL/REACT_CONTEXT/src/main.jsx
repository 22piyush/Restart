import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MyContext } from "./Hooks/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={"Piyush"}>
    <App />
  </MyContext.Provider>,
);
