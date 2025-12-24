import Props from "./components/Props";
import UseActionState from "./hooks/UseActionState";
import UseCallback from "./hooks/UseCallback";
import UseMemo from "./hooks/UseMemo";


function App() {

  const fruit = ["Apple", "Banana", "Orange"];
  let newName = "Piyush"

  return(
    <>
     <UseActionState/>
     <UseCallback/>
     <UseMemo/> 


     {/* MAP Fuction Array */}
     <div>
         <Props fruit={fruit} newName={newName}/>
     </div>

    </>
  );
}

export default App;
