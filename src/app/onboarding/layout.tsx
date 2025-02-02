import { FC, Suspense } from "react";

export default function OnboardingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    )
}