import { Input } from "@chakra-ui/react"

export const OrgSearch = () => {
    return (
        <div className="flex flex-row flex-wrap gap-1 gap-y-4 justify-center items-begin w-1/2 bg-neutral-600 p-4 rounded-3xl">
            <Input placeholder="Search for your club"></Input>
        </div >
    )
}