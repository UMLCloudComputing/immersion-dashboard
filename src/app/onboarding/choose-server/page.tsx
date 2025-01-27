"use client"
import { Guilds } from "@/components/Guilds";
import { DMSans } from "@/fonts";
import { signIn, useSession } from "next-auth/react";



export default function ChooseServerPage() {

    const { data: session, status } = useSession()

    if (status !== "loading" && !session) {
        signIn("discord", { callbackUrl: "/onboarding/choose-server" })
    }

    return (
        <div className="w-screen h-screen immersion-gradient flex justify-begin items-center flex-col">
            <h1 className={`text-5xl text-center text-neutral-300 p-5 ${DMSans.className}`}>Choose a server to add the bot</h1>
            <Guilds />
        </div>
    )

}