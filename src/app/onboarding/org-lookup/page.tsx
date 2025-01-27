"use client"
import { OrgSearch } from "@/components/OrgSearch";
import { DMSans } from "@/fonts";
import { Org } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { tempOrgs } from "@/data/testOrgs"

export default function OrgLookupPage() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [selectedOrg, setSelectedOrg] = useState<Org | null>(null)

    const verifyGuildId = () => {
        const guildId = searchParams.get("guild")

        if (!guildId) {
            console.error("No guild id provided")
            router.replace("/onboarding/choose-server") //redirect to choose-server
        }
    }

    const nextStep = () => {
        if (selectedOrg) {
            router.replace(`/onboarding/verify?guild=${searchParams.get("guild")}&org=${selectedOrg.id}`)
        }
    }

    useEffect(() => {
        verifyGuildId() //ensure that the guild id is present in the url params, otherwise redirect
    })

    //TODO: fetch orgs from engage api

    return (
        <div className="w-screen h-screen immersion-gradient flex justify-begin items-center flex-col">
            <h1 className={`text-5xl text-center text-neutral-300 p-5 ${DMSans.className}`}>Choose your club</h1>
            <OrgSearch orgs={tempOrgs} setOrg={setSelectedOrg} />
            <button className={`bg-neutral-600 m-20 p-4 transition-all ease-out hover:ease-in hover:bg-neutral-500 duration-10 text-neutral-200 ${DMSans.className} text-2xl rounded-2xl`} onClick={nextStep}>Next Step: Verify</button>
        </div>
    )
}