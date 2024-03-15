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
} from "@/components/ui/alert-dialog"
import { Pencil, Trash2 } from "lucide-react"

type DialogProps = {
    title: string
    description: string
    handleConfirm?: () => void
    handleCancel?: () => void
}

export default function DialogConfirmDelete({ title, description, handleConfirm, handleCancel }: DialogProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger
                className="border border-primary border-opacity-50 p-2 rounded-md"
            >
                  <Trash2 size={18} color="red"    />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        // onClick={() => handleCancel()}
                    >Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        // onClick={() => handleConfirm()}
                    >Confirmar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}