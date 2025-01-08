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