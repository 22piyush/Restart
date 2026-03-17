import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      Welcome to Home Page
      <div><Link href="/about">About</Link></div>
    </div>

  )
}

export default page