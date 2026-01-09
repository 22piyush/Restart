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


function Form(){

    const [formData, dispatch] = useReducer(reducer, {
        userName: "",
        email: ""
    });

    function handleChange(e){
        dispatch({
            name: e.target.name,
            value: e.target.value
        });
    }

    function reducer(state, action){
        return {
            ...state, 
            [action.name]:[action.value]
        }
    }

    return(
        <form>
            <input type='text' name="userName" placeholder="User Name" 
            value={formData.userName} onChange={handleChange}/>
            <input type='email' name="email" placeholder="Email"
             value={formData.email} onChange={handleChange}/>

            <p>{formData.userName} - {formData.email}</p>
        </form>
    )
}


function UseReducer() {
    const [checked, toggle] = useReducer((checked) => !checked, false);

    return(
        <div>
            <input type="checkbox" checked={checked} onChange={toggle}/>
             {checked ? "checked" : "Not Checked"}

            <Counter/>
            <Form/>
        </div>
    )
}

export default UseReducer