import Image from "next/image"
import SideImage from "@/src/images/bgi.jpg"
import Link from "next/link"
import { getProviders } from "next-auth/react"
import OAuth from "@/pages/api/signin/signin"

export default async function SignIn(){
  const providers = await getProviders() ?? [];
  return(
    <div className="flex w-full h-full">
      <div className="w-128">
        <p className="p-2 mt-10 mx-5 text-4xl font-cinzel tracking-tighter">Log in to your account</p>
        <form action="/api/test" method="POST" className="font-notosanskr mt-5 mx-5">
          <input className="p-3 w-full border-b border-black" type="text" placeholder="email"/><br/>
          <input className="p-3 w-full border-b border-black" type="password" placeholder="password"/><br/>
          <button className="p-3 mt-2 w-full border-none bg-orange-500 font-notosanskr font-extrabold text-xl rounded-md text-gray-100
                             hover:bg-white hover:text-orange-600" 
                  type="submit">Login</button>
        </form>
        <p className="mt-5 mx-5 text-center">Or with your social account</p>
        <OAuth providers={providers}/>
        <div className="p-2 my-5">
          <span className="mx-5">Don't have an account?</span>
          <Link href={'/signup'} className="text-emerald-950 hover:font-extrabold">Sign up</Link>
        </div>
        <Link href={'/'} className="font-cinzel m-3 p-2 text-2xl">◁ Main</Link>
      </div>
      <Image src={SideImage} alt="" className="h-screen w-screen z-0" priority={true}/>
    </div>
  )
}
