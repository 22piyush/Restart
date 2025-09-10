import React from "react";

function Header({ filterData, category, setCategory }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: "15px",textAlign: "center",backgroundColor: "rgb(36 28 46)",}} >
        <h1 style={{ fontSize: "28px", color: "#ffff", margin: 0 }}>
          Top Courses
        </h1>
      </div>

        {/* Buttons */}
        <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", }} >
            {filterData.map((item) => (
            <button key={item.id} onClick={()=>setCategory(item.value)} style={{  padding: "8px 16px",  borderRadius: "6px",border: "1px solid #333",   backgroundColor:
                category == item.value ? "rgb(36 28 46)" : "#f5f5f5", // highlight selected
              color: category == item.value ? "#fff" : "#000",
              cursor: "pointer",}} >
                {item.title}
            </button>
            ))}
        </div>
    </div>
  );
}

export default Header;
