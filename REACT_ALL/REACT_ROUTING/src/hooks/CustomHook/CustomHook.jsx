import React from 'react'
import useToggle from './useToggle'
import GetData from './GetData';


function CustomHook() {

  const [isOpen, toggleOpen] = useToggle();
  const [isTest, toggleTest] = useToggle();

  return (
    <div>
       <div>
            <button onClick={toggleOpen}>Toggle</button>
            {isOpen && <p>Hello this is visible</p>}
       </div>
       <div>
            <button onClick={toggleTest}>Toggle Test</button>
            {isTest && <p>Hello this is Yahubaba</p>}
       </div>

       <GetData/>
    </div>
  )
}

export default CustomHook