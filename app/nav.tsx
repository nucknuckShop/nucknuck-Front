'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from 'next/link'
import { signOut } from "next-auth/react"

export default function NavBar(){
  return(
    <div>
    {
      usePathname() != '/signin'
      ?
      <nav className='bg-emerald-900 text-white font-BlackHanSans p-5 text-center'>
        <Link href={'/'} className='mr-5'>Home</Link>
        <Link href={'/signin'} className='mr-5'>Sign in</Link>
        <button onClick={()=>{signOut()}}>Sign out</button>
      </nav>
      : <div></div>
    }
    </div>
  )
}