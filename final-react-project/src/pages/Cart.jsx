import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {

  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0)) // ✅ assuming item has price
  }, [cart])

  return (
    <div style={{ padding: "20px" }}>
      {
        cart.length > 0 ? (
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            
            {/* Left side - Items */}
            <div style={{ flex: 2, border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} itemIndex={index} item={item} />
                ))
              }
            </div>

            {/* Right side - Summary */}
            <div style={{ flex: 1, border: "1px solid #ccc", padding: "15px", borderRadius: "8px", height: "fit-content" }}>
              <h2>Your Cart</h2>
              <h3>Summary</h3>
              <p>Total Items: {cart.length}</p>
              <p><b>Total Amount:</b> ₹{totalAmount}</p>
              <button style={{
                width: "100%",
                padding: "10px",
                border: "none",
                backgroundColor: "#28a745",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Checkout
              </button>
            </div>

          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <p>Cart Empty</p>
            <Link to="/"><button>Shop Now</button></Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart
