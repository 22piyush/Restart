import UseActionState from "./hooks/UseActionState";
import UseCallback from "./hooks/UseCallback";
import UseMemo from "./hooks/UseMemo";


function App() {

  const fruit = ["Apple", "Banana", "Orange"];

  return(
    <>
     <UseActionState/>
     <UseCallback/>
     <UseMemo/> 


     {/* MAP Fuction Array */}
     <div>
          <h2>Fruit List</h2>
          <ul>
              {
                fruit.map((fruit, index) => {
                  <li>{index} - {fruit}</li>
                })
              }
          </ul>
     </div>

    </>
  );
}

export default App;
