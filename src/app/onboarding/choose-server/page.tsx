
// import { auth } from "@/auth";
// eslint-disable-next-line
import { Guilds } from "@/components/Guilds";

//eslint-disable-next-line
async function getOAuthBearerToken(): Promise<any> {
    const response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID as string,
            client_secret: process.env.DISCORD_CLIENT_SECRET as string,
            grant_type: 'client_credentials',
            scope: 'identify',
        }),
    });

    const data = await response.json();
    // console.log("oauth response: ", data)
    return data

}


export default async function ChooseServerPage() {

    return (
        <div>
            {/* <Guilds data={guilds} /> */}
        </div>
    )

}