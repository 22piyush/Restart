import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <div>Welcome to Home Page</div>
      <div>
        <Link href="/about">About</Link> 
        <Link href="/services">Services</Link>
      </div>
    </div>
  )
}

export default page