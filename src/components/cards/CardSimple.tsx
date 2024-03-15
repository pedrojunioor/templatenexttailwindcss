import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const buttonVariants = cva(
    "w-[350px] overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-primary text-secondary hover:bg-primary/90 border-slate-600",
                secondary: "bg-secondary text-primary hover:bg-secondary/80 border-black",
                green: "bg-green-400 hover:bg-green-400/80 border-green-600",
                red: "bg-red-400 hover:bg-red-400/80 border-red-400",
                black: "bg-black text-white hover:bg-black/80 border-slate-600",
                white: "bg-white text-black hover:bg-white/80 border-black",
            },
            size: {
                default: "h-full px-4 py-2",
                sm: "h-20 rounded-md px-3",
                md: "h-32 rounded-md px-3",
                lg: "h-52 rounded-md px-3",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

type variantTypes = 'default' | 'secondary' | 'green' | 'red' | 'black' | 'white'
type sizeOption = 'default' | 'sm' | 'md' | 'lg'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
    variant: variantTypes
    size: sizeOption
    children: ReactNode
}

export default function CardSimple({ title, description, variant, size, children, className, ...props }: CardProps) {

    return (
        <Card className={cn(buttonVariants({ variant, size, className }))}>
            <CardHeader>
                {title && <CardTitle >{title}</CardTitle>}
                {description && <CardDescription >{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
