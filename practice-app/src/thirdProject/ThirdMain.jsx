import React from 'react'
import Testimonial from './Testimonial'
import { ThirdData } from './ThirdData'

function ThirdMain() {
  return (
    <div>
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <div>
                <div>
                    <h1>Our Testimonial</h1>
                </div>
                <div>
                    <Testimonial reviews={ThirdData}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdMain