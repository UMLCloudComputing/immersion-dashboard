"use client"
import { VerificationProcessCard } from "@/components/VerificationProcessCard"
import { tempOrgs } from "@/data/testOrgs"
import { DMSans } from "@/fonts"
import { Org } from "@/types/types"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export default function VerificationPage() {
    //hooks
    const searchParams = useSearchParams()
    const router = useRouter()

    const [org, setOrg] = useState<Org | null>(null)
    const [acknowledged, setAcknowledged] = useState(false)

    //vars
    const guildId = searchParams.get("guild")
    const orgId = searchParams.get("org")

    //funcs
    const getOrgByID = (orgId: string) => {
        const org = tempOrgs.find(org => org.id === orgId)
        if (!org) {
            return null
        }
        return org
    }

    const verifyQueryParams = () => {
        if (!guildId) {
            console.error("No guild id provided")
            router.replace("/choose-server") //redirect to choose-server
        } else if (!orgId) {
            console.error("No org id provided")
            router.replace(`/org-lookup?guild=${guildId}`) //redirect to org-lookup
        }
    }

    const nextStep = () => {
        console.log("Send email and redirect")
    }

    //use effects
    useEffect(() => {
        verifyQueryParams()
    })

    //THIS IS SO TEMPORARY ITS NOT EVEN FUNNY
    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        if (orgId) {
            // delay(2000).then(() => {
            //     setOrg(getOrgByID(orgId))
            // })
            setOrg(getOrgByID(orgId))
        }
    }, [getOrgByID, orgId])

    return (
        <div className="w-screen h-screen flex flex-col immersion-gradient justify-begin items-center gap-0">
            <h1 className={`text-5xl text-center text-neutral-300 p-5 ${DMSans.className}`}>Verify</h1>
            <h3 className={`text-2xl text-center text-neutral-300 p-1 ${DMSans.className}`}>To continue, make sure you have access to the email listed as Primary Contact on Engage</h3>
            <h3 className={`text-2xl text-center text-neutral-300 p-1 ${DMSans.className}`}>We will send an email to this address with a verification code</h3>
            <Suspense fallback={<div>Loading...</div>}>
                <VerificationProcessCard _org={org} />
            </Suspense>
            <h3 className={`text-2xl text-center text-red-500 pt-10 pb-3 ${DMSans.className}`}>Check this box to confirm you have access to the email <span className="font-bold text-neutral-200">{org?.primaryContact}</span></h3>
            <Checkbox variant={"subtle"} size="lg"
                className="bg-neutral-300 rounded-lg"
                onCheckedChange={(e) => setAcknowledged(!!e.checked)}
            ></Checkbox>
            <button className={`bg-neutral-600 m-20 p-4 transition-all ease-out ${!acknowledged ? "" : "hover:ease-in"} ${!acknowledged ? "" : "hover:bg-neutral-500"}  duration-10 ${DMSans.className} text-2xl rounded-2xl text-neutral-200`} onClick={nextStep} disabled={!acknowledged}>Send Verification Email</button>
            {/* <Image src="/onboarding_primary_contact_example.png" alt="Primary Contact Example" width={500} height={500} /> */} {/*TODO: add video showing where to find primary contact*/}
        </div>
    )
}