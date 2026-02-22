import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "40px",
        alignItems: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "250px",
          height: "300px",
          objectFit: "contain",
        }}
      />

      <div style={{ maxWidth: "500px" }}>
        <h2>{product.title}</h2>
        <p style={{ color: "gray" }}>{product.category}</p>
        <p style={{ marginTop: "15px" }}>{product.description}</p>
        <h3 style={{ color: "green", marginTop: "20px" }}>₹ {product.price}</h3>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "orange",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
