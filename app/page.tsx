import Image from "next/image"
import giphy from "@/src/images/giphy.gif"

export default function Home() {
  return (
    <div className="flex justify-center">
      <Image src={giphy} alt="" className="mt-48 border-8 border-black"/>
    </div>
  )
}
