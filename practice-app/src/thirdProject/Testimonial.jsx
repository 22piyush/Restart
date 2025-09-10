import React, { useState } from 'react'
import Card from './Card'

function Testimonial(props) {
  const [index , setIndex] = useState(0);  
  let reviews = props.reviews;

    const handleNext = () => {
        index == reviews.length - 1 ?  setIndex(0) : setIndex(index + 1); 
    };

    const handlePrev = () => {
        index == 0 ? setIndex(reviews.length - 1) : setIndex(index - 1);
    };

    const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    // make sure it's not the same as current index
    if (randomIndex === index) {
        randomIndex = (randomIndex + 1) % reviews.length;
    }

    setIndex(randomIndex);
    };

    
  return (
    <div style={{width:'30%'}}>
        <Card review = {reviews[index]}/>
        
        <div style={{ marginTop: "10px" }}>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext} style={{ marginLeft: "10px" }}>Next</button>
            <button onClick={surpriseHandler} style={{ marginLeft: "10px" }}>Surprise Handler</button>
        </div>
    </div>
  )
}

export default Testimonial