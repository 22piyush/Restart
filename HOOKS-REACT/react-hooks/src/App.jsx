import Countdown from "./components/Countdown";
import Props from "./components/Props";
import UseActionState from "./hooks/UseActionState";
import UseCallback from "./hooks/UseCallback";
import UseMemo from "./hooks/UseMemo";
import UseState from "./hooks/useState";


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

     <UseState/>

    </>
  );
}

export default App;
