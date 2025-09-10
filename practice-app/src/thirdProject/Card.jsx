import React from 'react'

function Card(props) {

    let review = props.review;

  return (
    <div>

        <div>
            <img style={{height:'200px',width:'200px'}} src={review.image}/>
        </div>

        <div>
            <p>{review.name}</p>
        </div>

        <div>
            <p>{review.job}</p>
        </div>

        <div>
            <p>{review.text}</p>
        </div>

        <div>
            <button>+</button>
             <button>*</button>
        </div>

    </div>
  )
}

export default Card