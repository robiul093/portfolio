import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='text-center h-screen w-full items-center text-red-700 font-bold lg:mt-60 space-y-4'>
      <h2>404 - Page Not Found</h2>
      <Link href={'/'} className='btn'>Go To Home</Link>
    </div>
  )
}
