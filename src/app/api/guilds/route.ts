import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const session = await auth();

    if (!session) return null;


    const guilds = await fetch("https://discord.com/api/users/@me/guilds", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session.access_token}`,
        },
    })

    return NextResponse.json(await guilds.json())

}