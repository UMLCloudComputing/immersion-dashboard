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
        const abortController = new AbortController()
        const getGuilds = async () => {
            try {
                const res = await fetch("/api/guilds", {
                    signal: abortController.signal
                });
                const data = await res.json();
                if (data) {
                    const ownedGuilds = data.filter((guild: Guild) => BigInt(guild.permissions) & BigInt("0x8")) //filter out guilds where user isnt admin
                    setGuilds(ownedGuilds)
                    setLoading(false)
                }
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Request Cancelled")
                }
            }
        }

        getGuilds()
        return () => {
            abortController.abort()
        }
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