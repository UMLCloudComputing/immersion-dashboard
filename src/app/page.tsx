"use client"

import { DMSans } from "../fonts"
import Image from "next/image"
import { useRouter } from "next/navigation"
export default function HomePage() {

  const router = useRouter()

  const beginOnboarding = () => {
    router.replace("/onboarding/choose-server")
  }

  const dashboard = () => {
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col bg-neutral-300 w-screen h-screen items-center justify-center">
      <div className="flex flex-col gap-10 mb-40 items-center w-2/3">
        <h1 className={`${DMSans.className} font-bold text-black text-6xl text-center`}>Easily integrate <span className="text-engage-green">Engage</span> with your club&apos;s <span className="text-discord-purple">Discord</span></h1>
        <div className="flex flex-row">
          {/* <GradientDiv className={`immersion-gradient transition-all duration-500 ease-out hover-ease-in hover:shadow-xl hover:shadow-blue-400 shadow-none w-60 h-16 rounded-lg ${DMSans.className} text-3xl text-white font-bold hover:opacity-80`}> */}
          <button className={`immersion-gradient transition-all duration-500 ease-out hover-ease-in hover:shadow-xl hover:shadow-blue-400 shadow-none w-60 h-16 rounded-lg ${DMSans.className} text-3xl text-white font-bold hover:opacity-80`} onClick={beginOnboarding}>Get started</button>
          {/* <div>test</div>
          </GradientDiv> */}
          <button className={`transition-all duration-500 ease-out hover-ease-in hover:shadow-xl hover:shadow-blue-400 shadow-none border-2 border-black w-60 h-16 rounded-lg ml-5 ${DMSans.className} text-3xl text-black font-bold hover:opacity-80 hover:bg-black hover:text-white `} onClick={dashboard}>Dashboard</button>
        </div>
      </div>

      <div className="flex flex-row">
        <Image src="/engage_logo.svg" alt="Engage Logo" width={200} height={200} />
        <Image src="/immersion_logo_g.svg" alt="Immersion Logo" width={200} height={200} />

        <Image src="/discord_logo.svg" alt="Discord Logo" width={200} height={274} />

      </div>
    </div>
  )
}