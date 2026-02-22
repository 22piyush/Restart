import { useMyContext } from "../Hooks/MyContext";



function B() {
  
    const {count} = useMyContext();

  return <div>B - {count}</div>;
}

export default B;
