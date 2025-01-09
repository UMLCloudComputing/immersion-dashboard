"use client"
import { Avatar } from "./ui/avatar"
import { useSession } from "next-auth/react";
import NextLink from "next/link"
import Image from "next/image"
import { useState } from "react";

import { MenuRoot, MenuTrigger, MenuItem, MenuContent } from "./ui/menu";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export const NavBar = () => {

    const { data: session } = useSession();
    const [open, setOpen] = useState(false)


    return (
        <div className="w-screen h-12 bg-neutral-600 flex justify-between items-center">

            <NextLink href="/">
                <Image src={"/immersion.svg"} alt="Immersion Logo" width={50} height={50} className="m-2 p-1 hover:bg-neutral-500 rounded-lg transition-all ease-out hover:ease-in duration-10" />
            </NextLink>
            <MenuRoot open={open} onOpenChange={(e) => setOpen(e.open)} >
                <MenuTrigger asChild>
                    <Button onClick={() => setOpen(!open)} className="m-2 p-1">
                        {session ? (
                            <Avatar size={"lg"} src={`${session?.user?.image}`} className="m-2 border-2 border-neutral-500 hover:border-neutral-400 transition-all ease-out hover:ease-in duration-10" />
                        ) : (
                            <Avatar size={"lg"} src={"/discord_logo.svg"} className="m-2 p-1" />
                        )
                        }
                    </Button>

                </MenuTrigger>

                <MenuContent>
                    <MenuItem value="Sign out" onClick={() => signOut({ redirectTo: "/" })}>
                        Sign out
                    </MenuItem>

                </MenuContent>
            </MenuRoot >


        </div >
    )
}