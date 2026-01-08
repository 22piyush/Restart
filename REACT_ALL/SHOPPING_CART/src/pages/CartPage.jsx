import React from "react";

function CartPage({cart}) {

  return (
    <div>
      <div className="container mt-5">
        <h4 className="mb-3">Cart Items</h4>

        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Price (₹)</th>
            </tr>
          </thead>

          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="3">No items added</td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartPage;
