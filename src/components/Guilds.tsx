"use client"
import { Guild } from "@/types/types"
import { GuildIcon } from "./GuildIcon"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ProgressCircleRing, ProgressCircleRoot } from "./ui/progress-circle"

export const Guilds = () => {
    const [guilds, setGuilds] = useState<Guild[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const nextStep = (guild: Guild) => {
        router.replace(`/onboarding/org-lookup?guild=${guild.id}`)
    }

    useEffect(() => {
        const getGuilds = async () => {
            const res = await fetch("/api/guilds");
            const guilds = await res.json();
            const ownedGuilds = guilds.filter((guild: Guild) => BigInt(guild.permissions) & BigInt("0x8")) //filter out guilds where user isnt admin
            setGuilds(ownedGuilds)
            setLoading(false)
        }

        getGuilds()
    }, [])

    return (

        <div className="flex flex-row flex-wrap gap-1 gap-y-4 justify-center items-begin w-1/2 bg-neutral-600 p-4 rounded-3xl">
            {loading ? <ProgressCircleRoot value={null} size="lg">
                <ProgressCircleRing cap="round" />
            </ProgressCircleRoot> :
                guilds.map((guild: Guild) => (
                    <GuildIcon key={guild.id} guild={guild} onClick={nextStep} />
                ))
            }
        </div>
    )
}