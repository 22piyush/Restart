import React from "react";

function CartPage() {
  return (
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
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td>50000</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mobile</td>
            <td>20000</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Tablet</td>
            <td>30000</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Computer</td>
            <td>60000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
