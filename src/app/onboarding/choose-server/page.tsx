import { auth, signIn } from "@/auth";
import { Guilds } from "@/components/Guilds";
import { DMSans } from "@/fonts";
import { Guild } from "@/types/types";



export default async function ChooseServerPage() {

    const session = await auth()
    if (!session) {
        signIn("discord", { callbackUrl: "/onboarding/choose-server" })
    }

    const data = await fetch("https://discord.com/api/users/@me/guilds", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session.access_token}`,
        },
    })

    const guilds: Guild[] = await data.json()
    const ownedGuilds = guilds.filter((guild: Guild) => BigInt(guild.permissions) & BigInt("0x8")) // filter out guilds where user isnt admin

    return (
        <div className="flex justify-begin items-center flex-col">
            <h1 className={`text-5xl text-center text-neutral-300 p-5 ${DMSans.className}`}>Choose a server to add the bot</h1>
            <Guilds data={ownedGuilds} />
        </div>
    )

}