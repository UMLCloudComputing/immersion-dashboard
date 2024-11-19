"use client"
import Image from "next/image"
import { DMSans } from "../fonts"
import NextLink from "next/link"
import { useSession } from "next-auth/react"
export default function HomePage() {
  const session = useSession()

  return (
    <div className="flex flex-row">
      {/* Navbar*/}
      <div className="bg-black min-h-screen min-w-1/6 immersion-gradient flex flex-col">
        <NextLink href="/home">
          <Image src="/immersion_logo.svg" alt="Immersion Logo" width={48} height={48} />
        </NextLink>
        <div>
          {
            session.data ? "Signed in" : "Not signed in"
          }
        </div>



      </div>
      {/* Everything else (for now)*/}

      {/* Panels layout container*/}
      <div className="flex flex-row justify-around mt-20 min-h-5/6 w-full">

        {/* Left panel*/}
        <div className="w-1/3 immersion-gradient rounded-lg h-1/2">
          <div className="flex flex-row place-content-center w-full h-full">
            <div className="flex flex-col mt-20 mb-30 gap-6">
              <div className={`text-5xl font-bold text-white ${DMSans.className}`}>Easily integrate</div>
              <div className={`text-5xl font-bold text-white ${DMSans.className}`}>Engage with your</div>
              <div className={`text-5xl font-bold text-white ${DMSans.className}`}>club&apos;s Discord</div>
            </div>
          </div>
        </div>
        {/* Right panel*/}
        <div className="flex flex-col place-content-center w-96 mt-20 h-1/2 gap-5">
          <div className="flex justify-center">
            <button className={`bg-blue-400 transition-all duration-75 ease-out hover-ease-in hover:bg-blue-600 w-80 h-20 rounded-lg ${DMSans.className} text-3xl text-white font-bold`}>Sign up now</button>
          </div>
          <div className={` ${DMSans.className} text-xl text-center`}>
            or
          </div>
          <div className="flex justify-center">
            <button className={`bg-blue-400 transition-all duration-75 ease-out hover:ease-in hover:bg-blue-600 w-80 h-20 rounded-lg ${DMSans.className} text-3xl text-white font-bold`}>Go to dashboard</button>
          </div>
        </div>
      </div>
    </div>
  )
}