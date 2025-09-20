import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlices';
import toast from "react-hot-toast";

function CartItem({ item}) {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
      dispatch(remove(item.id));
      toast.error("Item Removed from Cart!");
  }

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "15px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    }}>
      
      {/* Image */}
      <div style={{ flex: "0 0 120px" }}>
        <img 
          src={item.image} 
          alt={item.title} 
          style={{ width: "100%", height: "auto", borderRadius: "8px" }} 
        />
      </div>

      {/* Details */}
      <div style={{ flex: 1, marginLeft: "15px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>{item.title}</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
          {item.description}
        </p>
        <p style={{ fontWeight: "bold", fontSize: "16px", color: "#222" }}>
          ₹{item.price}
        </p>
      </div>

      {/* Delete Button */}
      <div>
        <button style={{
          padding: "8px 12px",
          border: "none",
          backgroundColor: "#dc3545",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer"
        }} onClick={removeFromCart}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default CartItem
