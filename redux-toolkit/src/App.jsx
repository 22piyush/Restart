import React, { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import { useDispatch } from 'react-redux';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const dispatch = useDispatch();


  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div>
      <Header cartCount={cartCount} />
      <Cart cartCount={cartCount} />
      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '100px'
      }}>
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            addToCart={dispatch(addToCart)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
