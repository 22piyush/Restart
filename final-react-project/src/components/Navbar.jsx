import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <section>
                <div
                    style={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    padding: "0 20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                >
                    {/* Left side */}
                    <div style={{ fontWeight: "bold", fontSize: "18px" }}>Buy Items</div>

                    {/* Right side - Cart */}
                    <div style={{ position: "relative", cursor: "pointer" }}>
                        
                        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}><span style={{ fontWeight: "bold", fontSize: "15px", marginRight:'15px' }}>Home</span></NavLink>
                        
                        <NavLink to="/cart" style={{ textDecoration: "none", color: "inherit" }}><span>🛒</span></NavLink>
                        <span
                            style={{
                            position: "absolute",
                            top: "-8px",
                            right: "-10px",
                            background: "red",
                            color: "white",
                            borderRadius: "50%",
                            padding: "2px 6px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            }}
                        >
                            3
                        </span>
                    </div>
                </div>
        </section>

    </>
  )
}

export default Navbar