
// import { auth } from "@/auth";
// eslint-disable-next-line
import { auth } from "@/auth";
import { Guilds } from "@/components/Guilds";
import { redirect } from "next/navigation";



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

    console.log(await getUserGuilds())


    return (
        <div>
            <Guilds data={await getUserGuilds()} />
        </div>
    )

}