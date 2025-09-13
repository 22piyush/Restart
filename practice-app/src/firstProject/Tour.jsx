import React from 'react'
import Card from './Card'

function Tour({tours , removeTour}) {
  return (
    <div>
        <div>
            <h1>Plan With Piyush</h1>
        </div>
        <div style={{display:'flex',flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {
                tours.map((tour) => {

                    return <Card  key={tour.id} {...tour} removeTour={removeTour}/>

                })
            }
        </div>
    </div>
  )
}

export default Tour