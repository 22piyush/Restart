import React, { useState } from 'react'

function UseState() {

    const [isVisible , setIsVisible] = useState(false);

  return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Text
        </button>

        {isVisible && <div>Hello Bro</div>}
    </div>
  )
}

export default UseState