import { DMSans } from "../../fonts"
export default function HomePage() {

    return (
        <div className="flex flex-col">
            <div className="bg-black h-12 min-h-1/6 w-full immersion-gradient"></div>

            <div className="flex flex-row justify-around mt-20 min-h-5/6">
                <div className="w-1/3 immersion-gradient rounded-lg">
                    <div className="flex flex-row place-content-center w-full h-full">
                        <div className="flex flex-col mt-20 mb-30 gap-6">
                            <div className={`text-5xl font-bold text-white ${DMSans.className}`}>Easily integrate</div>
                            <div className={`text-5xl font-bold text-white ${DMSans.className}`}>Engage with your</div>
                            <div className={`text-5xl font-bold text-white ${DMSans.className}`}>club&apos;s Discord</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col place-content-center w-96 mt-20 h-1/2 gap-5">
                    <div className="flex justify-center">
                        <button className={`bg-blue-400 w-80 h-20 rounded-lg ${DMSans.className} text-3xl text-white font-bold`}>Sign up now</button>
                    </div>
                    <div className={` ${DMSans.className} text-xl text-center`}>
                        or
                    </div>
                    <div className="flex justify-center">
                        <button className={`bg-blue-400 w-80 h-20 rounded-lg ${DMSans.className} text-3xl text-white font-bold`}>Go to dashboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}