import clsx from "clsx";
import { Banknote, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface BoxWrapperProps {
    children: ReactNode
}

function BoxWrapper({ children }: BoxWrapperProps) {
    return <div className="bg-secondary max-w-96 rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

type OptionsColor = 'green' | 'red' | 'yellow'

interface CardInfoProps {
    title: string
    description: string
    color?: OptionsColor
    visual: {
        icon: LucideIcon
    }
}

export function CardInfo({ title, description, visual, color }: CardInfoProps) {
    return (
        <BoxWrapper>
            <div className={clsx("rounded-full h-12 w-12 flex items-center justify-center border-2 border-black", {
                'bg-green-400': color === 'green',
                'bg-red-400': color === 'red',
                'bg-yellow-400': color === 'yellow',
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
        </BoxWrapper>
    )
}