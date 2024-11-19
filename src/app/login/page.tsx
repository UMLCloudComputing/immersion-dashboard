
import { signIn } from "@/auth"


export default function LoginPage() {
    return (
        <div>
            <form action={async () => {
                "use server"
                await signIn("discord")
            }}>
                <button type="submit">Sign in with discord</button>
            </form>
        </div>
    )
}