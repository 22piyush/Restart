import React from 'react';
import Product from './newComponent/Product';
import NewProduct from './newComponent/NewProduct';
// import ImageSlider from './ImageSlider';

function App() {

  const product = [
    {
      id:'p1',
      title:'nirma',
      date:new Date(2022 , 8, 10)
    },
    {
      id:'p2',
      title:'Sirf Excel',
      date:new Date(2022 , 8, 10)
    },
    {
      id:'p3',
      title:'Tide',
      date:new Date(2022 , 8, 10)
    },
    {
      id:'p4',
      title:'maggi',
      date:new Date(2022 , 8, 10)
    },
  ]

  function printProductData(data){
    console.log('i am insid outside app.js');
    
    console.log(data);
    
  }

  return (
    <div >
      {/* <ImageSlider /> */}
        <Product item={product}/>
        <NewProduct pranay={printProductData}/>
    </div>
  );
}

export default App;
