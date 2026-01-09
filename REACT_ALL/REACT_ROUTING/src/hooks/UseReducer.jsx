import React, { act, useReducer, useState } from 'react'


// function Test(){
//     const [checked, setChecked] = useState(false);

//     return(
//         <div>
//             <input type="checkbox" checked={checked}
//              onChange={() => setChecked(!checked)}/>

//              {checked ? "checked" : "Not Checked"}
//         </div>
//     )
// }


function Counter(){

    function reducer(state, action){
        switch(action.type){
            case "increment" :
                return{count: state.count + 1}
                
            case "decrement" :
                return{count: state.count > 0 ? state.count - 1 : state.count}

            case "reset" :
                return{count: 0}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count:0});

    return(
        <div>
            <h2>Count: {state.count}</h2>

            <button onClick={() => dispatch({ type : "increment" })}>+</button>
            <button onClick={() => dispatch({ type : "decrement" })}>-</button>
            <button onClick={() => dispatch({ type : "reset" })}>Reset</button>
        </div>
    )
}



function UseReducer() {
    const [checked, toggle] = useReducer((checked) => !checked, false);

    return(
        <div>
            <input type="checkbox" checked={checked} onChange={toggle}/>
             {checked ? "checked" : "Not Checked"}

            <Counter/>
        </div>
    )
}

export default UseReducer