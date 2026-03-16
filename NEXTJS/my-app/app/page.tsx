import { log } from 'console'
import Link from 'next/link'
import React from 'react'

async function Page() {
  
  return (
    <div>Page Content

      <Link href="/about">About</Link>

    </div>
  )
}

export default Page