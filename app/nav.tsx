'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from 'next/link'

export default function NavBar(){
  return(
    <div>
    {
      usePathname() != '/signin' 
      ?
      <nav className='bg-emerald-900 text-white font-BlackHanSans p-5 text-center'>
        <Link href={'/'} className='mr-5'>Home</Link>
        <Link href={'/signin'} className='mr-5'>Sign in</Link>
        <Link href={'/auth/signin'} className='mr-5'>test in</Link>
        <Link href={'/signup'}>Sign up</Link>
      </nav>
      : <div></div>
    }
    </div>
  )
}