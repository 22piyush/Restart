import React, { useState } from 'react'


function Test(){
    const [checked, setChecked] = useState(false);

    return(
        <div>
            <input type="checkbox" checked={checked}
             onChange={() => setChecked(!checked)}/>

             {checked ? "checked" : "Not Checked"}
        </div>
    )
}


function UseReducer() {
  return (
    <div>UseReducer
        <Test/>
    </div>
  )
}

export default UseReducer