import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#2f2f2f",
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        boxSizing: "border-box",
        position:'fixed',
        top:'0'
      }}
    >
      <h4 style={{ color: "white", margin: 0 }}>Movie Explorer</h4>

      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Home
      </Link>
    </div>
  );
}

export default Header;
