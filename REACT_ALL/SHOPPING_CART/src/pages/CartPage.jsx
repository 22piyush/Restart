import React from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeCart, updateQty, totalQty } = useCart();

  return (
    <div className="container mt-5">
      <h4 className="mb-3">Cart Items</h4>

      <div
        className="table-responsive"
        style={{ height: "500px", overflowY: "auto" }}
      >
        <table className="table table-bordered text-center mb-0">
          <thead className="table-dark sticky-top">
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "300px" }}
                  >
                    <strong>No items added</strong>
                  </div>
                </td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>

                  <td style={{ width: "100px" }}>
                    <input
                      type="number"
                      min="1"
                      className="form-control text-center"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, Number(e.target.value))
                      }
                    />
                  </td>

                  <td>₹ {item.price * item.qty}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end"><strong>$ {totalQty}</strong></div>
    </div>
  );
}

export default CartPage;
