import Image from "next/image"
import giphy from "@/src/images/giphy.gif"

export default async function Home() {
  return (
    <div className="flex justify-center">
      <Image src={giphy} alt="" priority={true} className="mt-48 border-8 border-black"/>
    </div>
  )
}
