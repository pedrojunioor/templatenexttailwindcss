import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ReactNode } from "react"

type sideOptions = 'left' | 'right'

interface SheetProps {
    side?: sideOptions
    titleButton: string
    title?: string
    description?: string
    children: ReactNode
}

export default function SheetDemo({ side = 'left', titleButton, title, description, children }: SheetProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">{titleButton}</Button>
            </SheetTrigger>
            <SheetContent
                side={side}
            >

                <SheetHeader>
                    {title && <SheetTitle>{title}</SheetTitle>}
                    {description && <SheetDescription>
                        {description}
                    </SheetDescription>}
                </SheetHeader>
                {children}

                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
