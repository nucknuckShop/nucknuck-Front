import Image from "next/image"
import SideImage from "@/src/images/bgi.jpg"
import GithubOAuth from "@/pages/auth/signin"
import { getProviders } from "next-auth/react"

export default async function SignIn(){
  const providers = await getProviders() ?? [];

  return(
    <div className="flex w-full h-full">
      <div className="w-128">
        <p className="p-2 mt-10 mx-5 text-4xl font-cinzel tracking-tighter">Log in to your account</p>
        <form action="/api/test" method="POST" className="font-notosanskr mt-5 mx-5">
          <input className="p-3 w-full border-b border-black" type="text" placeholder="email"/><br/>
          <input className="p-3 w-full border-b border-black" type="password" placeholder="password"/><br/>
          <button className="p-3 mt-2 w-full border-none bg-orange-500 font-notosanskr font-extrabold text-xl rounded-md
                             hover:bg-white hover:text-orange-600" 
                  type="submit">Login</button>
        </form>
        <p className="mt-5 mx-5 text-center">Or with your social account</p>
        <GithubOAuth providers={providers}/>
      </div>
      <Image src={SideImage} alt="" className="h-screen w-screen z-0"/>
    </div>
  )
}
