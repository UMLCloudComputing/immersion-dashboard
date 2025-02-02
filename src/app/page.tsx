"use client"

import { Alert } from "@chakra-ui/react"
import { DMSans } from "../fonts"
import Image from "next/image"

// import { useSession } from "next-auth/react"
// import { redirect } froms "next/navigation"

import { useRouter } from "next/navigation"
import { Route53RecoveryCluster } from "aws-sdk"
import { GradientDiv } from "@/components/GradientDiv"
// import { auth } from "next-auth/react"
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

    // <div className="flex flex-row bg-neutral-400 w-screen h-screen">
    //   {/* Everything else (for now)*/}


    //   {/* Panels layout container*/}
    //   <div className="flex flex-row justify-around mt-20 min-h-5/6 w-full">

    //     {/* Left panel*/}
    //     <div className="w-1/3 immersion-gradient rounded-lg h-1/2">
    //       <div className="flex flex-row place-content-center w-full h-full">
    //         <div className="flex flex-col mt-20 mb-30 gap-6">
    //           <div className={`text-5xl font-bold text-white ${DMSans.className}`}>Easily integrate</div>
    //           <div className={`text-5xl font-bold text-white ${DMSans.className}`}>Engage with your</div>
    //           <div className={`text-5xl font-bold text-white ${DMSans.className}`}>club&apos;s Discord</div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* Right panel*/}
    //     <div className="flex flex-col place-content-center w-96 mt-20 h-1/2 gap-5">
    //       <div className="flex justify-center">
    //         <button
    //           className={`bg-custom-cyan transition-all duration-75 ease-out hover-ease-in hover:bg-blue-600 w-80 h-20 rounded-lg ${DMSans.className} text-3xl text-white font-bold`} onClick={beginOnboarding}>Sign up now</button>
    //       </div>
    //       <div className={` ${DMSans.className} text-xl text-center`}>
    //         or
    //       </div>
    //       <div className="flex justify-center">
    //         <button className={`bg-custom-cyan transition-all duration-75 ease-out hover:ease-in hover:bg-blue-600 w-80 h-20 rounded-lg ${DMSans.className} text-3xl text-white font-bold`} onClick={dashboard}>Go to dashboard</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  )
}