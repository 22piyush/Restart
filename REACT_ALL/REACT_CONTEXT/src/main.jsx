import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MyContextProvider } from "./Hooks/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
);
