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

import { BrowserRouter, Routes, Route, Link , useParams } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {

  function User(){
    console.log(useParams());
    const { id } = useParams();
    return <h2>User Profile for ID: {id}</h2>
  }

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

          <h1>React Router Example</h1>
          <nav>
            <Link to={"/"}>Home</Link> |
            <Link to={"/about"}>About</Link> |
            <Link to={"/contact"}>Contact</Link> |
            <Link to="/user/10">User</Link> 
          </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/user/:id" element={<User/>} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
