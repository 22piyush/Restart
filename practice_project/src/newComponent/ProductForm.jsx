import React from 'react'
import './Product.css'


function ProductForm() {

    function titleChangeHandler(){
        console.log("Title Change Handler");
        
    }

  return (
    <>
        <div className='cardss'>
            <form action="" className='product-card'>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date"/>
                </div>
                <div>
                    <label ></label>
                    <input type="text"/>
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