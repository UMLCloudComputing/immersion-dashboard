"use client"
import { Guild } from "@/types/types"
import { GuildIcon } from "./GuildIcon"
import { useRouter } from "next/navigation"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Guilds = ({ data }: { data: Guild[] }) => {
    const router = useRouter()
    const ownedGuilds = data.filter((guild: Guild) => BigInt(guild.permissions) & BigInt("0x8")) //filter out guilds where user isnt admin
    const nextStep = (guild: Guild) => {
        console.log(guild)
        router.replace(`/onboarding/org-lookup?guild=${guild.id}`)
    }
    return (

        <div className="flex flex-row flex-wrap gap-1 gap-y-4 justify-center items-begin w-1/2 bg-neutral-600 p-4 rounded-3xl">
            {ownedGuilds.map((guild: Guild) => (
                <GuildIcon key={guild.id} guild={guild} onClick={nextStep} />
            ))}
        </div>
    )
}