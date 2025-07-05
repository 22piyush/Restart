import React from 'react'
import ProductForm from './ProductForm'

function NewProduct(props) {

    function saveProduct(product){
        console.log("new product data");
        
        console.log(product);
        
        props.pranay(product)
        
    }

  return (
    <div>
        <ProductForm onSaveProduct={saveProduct}/>
    </div>
  )
}

export default NewProduct