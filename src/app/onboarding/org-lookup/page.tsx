import { OrgSearch } from "@/components/OrgSearch";
import { DMSans } from "@/fonts";

export default function OrgLookupPage() {
    return (
        <div className="w-screen h-screen immersion-gradient flex justify-begin items-center flex-col">
            <h1 className={`text-5xl text-center text-neutral-300 p-5 ${DMSans.className}`}>Choose your club</h1>
            <OrgSearch />
        </div>
    )
}