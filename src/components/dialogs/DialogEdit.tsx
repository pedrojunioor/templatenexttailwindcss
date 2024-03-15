import FormEdit from "@/app/tables/form-edit"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogOverlay
} from "@/components/ui/alert-dialog"
import { Pencil, Trash2 } from "lucide-react"
import { ReactNode, useState } from "react"


type DialogProps = {
    title: string
    description: string
    handleConfirm: () => void
    handleCancel: () => void
    children: ReactNode
}

export default function DialogEdit({ title, description, handleConfirm, handleCancel, children }: DialogProps) {
    return (
        <AlertDialog
        >
            <AlertDialogTrigger
                className="border border-primary border-opacity-50 p-2 rounded-md"
            >
                <Pencil size={18} />
            </AlertDialogTrigger>
            <AlertDialogContent>
                {children}
            </AlertDialogContent>
        </AlertDialog>
    )
}