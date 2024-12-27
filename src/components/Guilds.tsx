/* eslint-disable @typescript-eslint/no-explicit-any */
export const Guilds = ({ data }: { data: any }) => {
    return (
        <div>
            {data.map((guild: any) => (
                <div key={guild.id} className={"bg-blue-100"}>
                    <h1>{guild.name}</h1>
                </div>
            ))}
        </div>
    )
}