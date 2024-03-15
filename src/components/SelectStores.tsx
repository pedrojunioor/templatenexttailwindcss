'use client'

import React from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface OptionsProps {
    label: string
    value: number
}

type SelectProps = {
    defaultStore?: string
    options: OptionsProps[]
    handleSelectValue: (e: any) => void
}

export function SelectStores({
    defaultStore,
    options,
    handleSelectValue
}: SelectProps) {
    return (
        <Select
            defaultValue={defaultStore}
            onValueChange={e => handleSelectValue(e)}
        >
            <div className="w-full flex flex-col gap-2 px-4">
                <span
                    className="px-1 font-semibold text-primary"
                >Selecione uma loja:</span>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma loja" />
                </SelectTrigger>

                <SelectContent>
                    {options.map(value => {
                        return <SelectItem key={value.value} value={String(value.value)}>{String(value.label).replaceAll('_',' ')} </SelectItem>
                    })}
                </SelectContent>
            </div>
        </Select>
    )
}
