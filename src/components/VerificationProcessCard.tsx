"use client"

import { DMSans } from "@/fonts"
import { Org } from "@/types/types"
import { use } from "react"

export const VerificationProcessCard = ({ _org }: { _org: Org | null }) => {
    // const org = use(_org)
    const org = _org
    return (
        <div>
            <h2 className={`text-3xl text-center text-neutral-300 p-3 ${DMSans.className}`}>Primary Contact for <span className="font-bold text-neutral-200">{org?.name}</span> is:</h2>
            <h2 className={`text-3xl text-center text-neutral-200 p-1 font-bold ${DMSans.className}`}>{org?.primaryContactEmail}</h2>
        </div>
    )
}