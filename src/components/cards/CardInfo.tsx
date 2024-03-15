import clsx from "clsx";
import { Banknote, LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { SkeletonDemo } from "../demo/skeleton/skeleton-card-indo-demo";

interface BoxWrapperProps {
    children: ReactNode
}

function BoxWrapper({ children }: BoxWrapperProps) {
    return <div className=" max-w-96  rounded-sm p-4 flex-1 border border-border flex items-center">{children}</div>
}

type OptionsColor = 'green' | 'red' | 'yellow'

interface CardInfoProps {
    title: string
    description: string
    color?: OptionsColor
    visual: {
        icon: LucideIcon
    }
    loading?: boolean
}

export function CardInfo({ title, description, visual, color, loading = false }: CardInfoProps) {
    return (
        <>
            {
                loading ?
                    < BoxWrapper  >
                        <SkeletonDemo />
                    </BoxWrapper>
                    :
                    < BoxWrapper >
                        <div className={clsx("rounded-full h-12 w-12 flex items-center justify-center border-2 border-black", {
                            'bg-green-600': color === 'green',
                            'bg-red-600': color === 'red',
                            'bg-yellow-600': color === 'yellow',
                            'bg-secondary': color === undefined,
                        })}>
                            <visual.icon />
                        </div>
                        <div className="pl-4 ">
                            <span className="text-sm text-primary font-semibold">{title}</span>
                            <div className="flex items-center">
                                <strong className="text-xl text-primary  font-semibold">{description}</strong>
                            </div>
                        </div>
                    </BoxWrapper >
            }
        </>
    )
}