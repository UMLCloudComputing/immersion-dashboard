import { Response } from "next/server";

export interface Guild {
    id: string
    name: string,
    icon: string?,
    banner: string?,
    owner: boolean,
    permissions: bigint,
    features: string[],
    approximate_member_count: number,
    approximate_presence_count: number

}

export interface Org {
    id: string,
    name: string,
    icon: string,
    primaryContactEmail: string
}

export interface VerificationEmailActionResponse {
    status: "success" | "error" | "idle",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    message: any
}

export interface FetchError {
    message: string;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Window { scrollTimeout: any }
}