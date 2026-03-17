import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <div>Welcome to Home Page</div>
      <div>
        <p>
          <Link href="/about">About</Link>
        </p>
        <p>
          <Link href="/services">Services</Link>
        </p>
        <p>
          <Link href="/blogs">Blogs</Link>
        </p>
      </div>
    </div>
  )
}

export default page