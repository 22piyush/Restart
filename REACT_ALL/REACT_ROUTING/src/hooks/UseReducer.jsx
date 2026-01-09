import React, { useReducer, useState } from 'react'


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


function UseReducer() {
    const [checked, toggle] = useReducer((checked) => !checked, false);

    return(
        <div>
            <input type="checkbox" checked={checked} onChange={toggle}/>

             {checked ? "checked" : "Not Checked"}
        </div>
    )
}

export default UseReducer