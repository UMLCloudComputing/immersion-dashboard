"use client"
import { Avatar, AvatarGroup } from "./ui/avatar"
import { signIn, useSession } from "next-auth/react";
import NextLink from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";

import { MenuRoot, MenuTrigger, MenuItem, MenuContent } from "./ui/menu";
import { signOut } from "next-auth/react";
import { DMSans } from "@/fonts";

export const NavBar = () => {

    const { data: session } = useSession();
    const [open, setOpen] = useState(false)

    const [topOfPage, setTopOfPage] = useState(false);

    const handleScroll = () => {
        setTopOfPage(window.scrollY === 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`${!topOfPage && "shadow-2xl shadow-neutral-500"} transition-all duration-100 w-full h-12 bg-neutral-300 fixed top-0 z-50`}>
            <div className="flex justify-between items-center w-full h-full">
                <NextLink href="/" className="flex flex-row items-center shadow-none hover:shadow-xl hover:shadow-neutral-500 rounded-lg transition-all ease-out hover:ease-in duration-10 m-2 p-1">
                    <Image src={"/immersion_logo_g.svg"} alt="Immersion Logo" width={50} height={50} className="p-1 hover:animate-spin-once" />
                    <h1 className={`${DMSans.className} text-neutral-500 text-2xl font-bold ml-2`}>Immersion</h1>
                </NextLink>
                {
                    session ? (
                        <MenuRoot open={open} onOpenChange={(e) => setOpen(e.open)} >
                            <MenuTrigger asChild>
                                <AvatarGroup>
                                    <Avatar size={"lg"} src={`${session?.user?.image}`} className="m-2 border-2 border-neutral-500 hover:border-neutral-400 transition-all ease-out hover:ease-in duration-10" />
                                </AvatarGroup>
                            </MenuTrigger>

                            <MenuContent>
                                <MenuItem value={`Hi, ${session.user.name}`} disabled>
                                    Hi, {session.user.name}
                                </MenuItem>
                                <MenuItem value="Sign out" onClick={() => signOut({ redirectTo: "/" })} className="text-red-500 rounded-md">
                                    Sign out
                                </MenuItem>

                            </MenuContent>
                        </MenuRoot >
                    ) : (
                        <button className="m-2 p-1 hover:bg-neutral-500 rounded-lg transition-all ease-out hover:ease-in duration-10" onClick={() => signIn("discord")}>Sign in</button>

                    )}
            </div>
        </header >
    )
}