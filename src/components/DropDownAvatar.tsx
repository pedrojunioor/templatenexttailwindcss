'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useAuthentication } from "@/hooks/useAuth";

export function DropDownAvatar() {

    const { userInfo, handleLogout } = useAuthentication()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2">
                    <span
                        className="font-semibold"
                    >
                        {userInfo && userInfo?.Nom_Usuari}
                    </span>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                </div >
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <Button
                    className="flex gap-2"
                    onClick={() => handleLogout()}
                    variant='ghost'
                >
                    <LogOut />
                    <span>
                        Logout
                    </span>
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
