import Countdown from "./components/Countdown";
import FormHandling from "./components/FormHandling";
import FormValidation from "./components/FormValidation";
import Props from "./components/Props";
import SimpleForm from "./components/SimpleForm";
import Todo from "./components/Todo";
import UncontrolledCom from "./components/UncontrolledCom";
import UseActionState from "./hooks/UseActionState";
import UseCallback from "./hooks/UseCallback";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseState from "./hooks/useState";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {

  // const fruit = ["Apple", "Banana", "Orange"];
  // let newName = "Piyush"

  return(
    <>
     {/* <UseActionState/>
     <UseCallback/>
     <UseMemo/> 



     <div>
         <Props fruit={fruit} newName={newName}/>
     </div> */}

     {/* <Countdown/> */}

     {/* <UseState/> */}

     {/* <FormHandling/> */}
     {/* <SimpleForm/> */}

     {/* <UncontrolledCom/> */}

     {/* <FormValidation/> */}

     {/* <Todo/> */}

     {/* <UseEffect/> */}





      {/* ROUTING  */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
