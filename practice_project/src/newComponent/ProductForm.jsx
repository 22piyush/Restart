import React from 'react'
import './Product.css'


function ProductForm() {
  return (
    <>
        <div className='cardss'>
            <form action="" className='product-card'>
                <div>
                    <label>Title</label>
                    <input type="text"/>
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