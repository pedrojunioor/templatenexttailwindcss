'use client'
import { Nav } from "@/components/nav";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Inbox, Send, ArchiveX, Trash2, Archive, Users2, AlertCircle, MessagesSquare, ShoppingCart, File } from "lucide-react";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip"
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const pathname = usePathname()

    return (
        <TooltipProvider delayDuration={0}>
            <div
                className={clsx("transition-all flex-col bg-background bg-opacity-10 duration-1000 ease-in-out h-screen overflow-hidden border-r m-2", {
                    'w-12': isCollapsed,
                    'w-48': !isCollapsed
                })}
            >
                <div className="w-full h-full ">
                    <Nav
                        isCollapsed={isCollapsed}
                        links={[
                            {
                                title: "Dashboards",
                                label: "",
                                icon: Trash2,
                                variant: pathname.includes('/dashboards') ? 'default' : 'ghost',
                            },
                            {
                                title: "Buttons",
                                label: "",
                                icon: Inbox,
                                variant: pathname.includes('/buttons') ? 'default' : 'ghost',
                            },
                            {
                                title: "Cards",
                                label: "",
                                icon: File,
                                variant: pathname.includes('/cards') ? 'default' : 'ghost',
                            },
                            {
                                title: "Tables",
                                label: "",
                                icon: Send,
                                variant: pathname.includes('/tables') ? 'default' : 'ghost',
                            },
                            {
                                title: "Carousel",
                                label: "",
                                icon: ArchiveX,
                                variant: pathname.includes('/carousel') ? 'default' : 'ghost',
                            },
                         
                            {
                                title: "Drawer",
                                label: "",
                                icon: Archive,
                                variant: pathname === 'drawer' ? 'default' : 'ghost',
                            },
                        ]}
                    />
                    <Separator />
                    <Nav
                        isCollapsed={isCollapsed}
                        links={[
                            {
                                title: "ScrollArea",
                                label: "",
                                icon: Users2,
                                variant: pathname === 'scrollarea' ? 'default' : 'ghost',
                            },
                            {
                                title: "Tabs",
                                label: "",
                                icon: AlertCircle,
                                variant: pathname === 'tabs' ? 'default' : 'ghost',
                            },
                            {
                                title: "Accordion",
                                label: "",
                                icon: MessagesSquare,
                                variant: pathname === 'accordion' ? 'default' : 'ghost',
                            },
                            // {
                            //     title: "Shopping",
                            //     label: "",
                            //     icon: ShoppingCart,
                            //     variant: pathname === 'inbox' ? 'default' : 'ghost',
                            // },
                            // {
                            //     title: "Promotions",
                            //     label: "",
                            //     icon: Archive,
                            //     variant: pathname === 'inbox' ? 'default' : 'ghost',
                            // },
                        ]}
                    />
                </div>
            </div>

        </TooltipProvider>
    )
}