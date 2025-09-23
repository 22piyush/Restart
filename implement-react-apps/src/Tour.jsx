import React from 'react'
import Card from './Card'

function Tour({tour , removeTour}) {
  return (
    <div>
        {
            tour.map((t)=>{
                return <Card tour={t} removeTour={removeTour}/>
            })
        }
    </div>
  )
}

export default Tour