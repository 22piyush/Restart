import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100px",
              height: "120px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <h4 style={{ fontSize: "14px", minHeight: "40px" }}>
            {product.title}
          </h4>
          <p style={{ fontWeight: "bold", color: "green" }}>
            ₹ {product.price}
          </p>
          <button
            onClick={() => navigate(`/products/${product.id}`)}
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
