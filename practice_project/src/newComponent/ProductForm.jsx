import React, { useState } from 'react'
import './Product.css'


function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value) 
    }

    function submitHandler(event){
 
        event.preventDefault();
        const productData = {
            title:newTitle,
            date:newDate
        }

        console.log(productData);    

        props.onSaveProduct(productData)
        
        setTitle('');
        setDate('');
    }

  return (
    <>
        <div className='cardss'>
            <form onSubmit={submitHandler} className='product-card'>
                <div>
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={newDate} onChange={dateChangeHandler}/>
                </div>
                <div>
                    <button type='submit'>Add Product</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default ProductForm