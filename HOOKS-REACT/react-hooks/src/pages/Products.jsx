import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
        
        <Outlet/>
        <nav>
          <Link to={"form"}>Form</Link> |
          <Link to={"countdown"}>Countdown</Link> |
        </nav>

    </div>
  )
}

export default Products