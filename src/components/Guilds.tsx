import { Guild } from "@/types/types"
import Image from "next/image"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Guilds = ({ data }: { data: Guild[] }) => {

    const ownedGuilds = data.filter((guild: Guild) => BigInt(guild.permissions) & BigInt("0x8"))
    return (
        <div className="grid grid-cols-6 gap-0.5 gap-y-4 bg-white justify-evenly items-center">
            {ownedGuilds.map((guild: Guild) => (
                <div key={guild.id} className="flex flex-col justify-center items-center">
                    <div className="justify-center items-center flex w-32 h-32 overflow-hidden rounded-full bg-white border-black border-4">
                        {
                            guild.icon == null ? (
                                <Image src={"/discord_logo.svg"} alt="Guild Icon" width={512} height={512} objectFit="cover" />
                            ) : (
                                <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="Guild Icon" width={512} height={512} />
                            )

                        }
                    </div>
                    <h3 className="text-black">{guild.name}</h3>
                </div>
            ))}
        </div>
    )
}