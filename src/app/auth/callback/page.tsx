"use client"
import { useSearchParams } from "next/navigation"

export default function CallbackPage() {
    const queryParams = useSearchParams()
    const code = queryParams.get("code") as string
    console.log("client side code from query:", code)

    fetch("http://localhost:3000/api/auth/discordAuthorizationCodeGrant", {
        method: "POST",
        body: JSON.stringify({
            code: code
        })
    }).then(res => {
        const test = res.json()
        console.log(test)
    })

    // fetch("https://discord.com/api/v10/oauth2/token", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: new URLSearchParams({
    //         client_id: "1318737559760928799",
    //         client_secret: "ZH0GnY5VUAlVkzFpJ6Yc_3I9jUcpAkJx",
    //         grant_type: "authorization_code",
    //         code,
    //         redirect_uri: "http://localhost:3000/auth/callback",
    //         scope: "identify guilds"
    //     }).toString()

    // }).then(res => console.log(res.json()))
    return (
        <div>
            <h1>Callback Page</h1>
        </div>
    )
}