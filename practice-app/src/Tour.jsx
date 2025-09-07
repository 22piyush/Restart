import React from 'react'
import Card from './Card'

function Tour({tours}) {
  return (
    <div>
        <div>
            <h1>Plan With Piyush</h1>
        </div>
        <div style={{display:'flex',     flexWrap: "wrap",     // allows wrapping to the next line
    justifyContent: "center", // centers cards horizontally
    gap: "20px" }}>
            {
                tours.map((tour) => {

                    return <Card {...tour} />

                })
            }
        </div>
    </div>
  )
}

export default Tour