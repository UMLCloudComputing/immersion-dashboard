"use client"
import { DMSans } from "@/fonts"
import { PinInput } from "@/components/ui/pin-input"
import { useRouter } from "next/navigation"
import { confirmVerificationCode } from "@/app/actions"

export default function VerificationCodeEntryPage() {
    const router = useRouter()


    return (
        <div className="w-screen h-screen immersion-gradient flex justify-begin items-center flex-col">
            <h1 className={`text-5xl text-center text-neutral-300 p-5 ${DMSans.className}`}>Check your inbox!</h1>
            <h3 className={`text-3xl text-center text-neutral-300 ${DMSans.className}`}>We sent you a code. It will expire in 2 minutes</h3>
            <PinInput count={6} size="2xl" className={`mt-20 p-5 bg-neutral-600 rounded-2xl ${DMSans.className}`} variant="flushed" otp />
            <button className={`bg-neutral-600 m-20 p-4 transition-all ease-out hover:ease-in hover:bg-neutral-500 duration-10 text-neutral-200 ${DMSans.className} text-2xl rounded-2xl`} onClick={() => confirmVerificationCode()}>Confirm</button>
        </div >
    )
}