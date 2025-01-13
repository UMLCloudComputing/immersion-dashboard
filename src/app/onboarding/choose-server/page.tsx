
// import { auth } from "@/auth";
// eslint-disable-next-line
import { auth } from "@/auth";
import { Guilds } from "@/components/Guilds";
import { DMSans } from "@/fonts";
import { redirect } from "next/navigation";
import { Suspense } from "react";



export default async function ChooseServerPage() {

    const session = await auth();

    if (!session) {
        redirect("/api/auth/signin")
    }
    const getUserGuilds = async () => {
        const guilds = await fetch("https://discord.com/api/users/@me/guilds", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${session.access_token}`,
            },
        }
        )
        return guilds.json()
    }



    return (
        <div className="w-screen h-screen immersion-gradient flex justify-begin items-center flex-col">
            <h1 className={`text-5xl text-center text-neutral-300 p-5 ${DMSans.className}`}>Choose a server to add the bot</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Guilds data={await getUserGuilds()} />
            </Suspense>
        </div>
    )

}