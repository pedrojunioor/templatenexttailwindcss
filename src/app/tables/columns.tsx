"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal,  ArrowUpDown} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import DialogConfirmDelete from "@/components/dialogs/DialogConfirmDelete"
import DialogEdit from "@/components/dialogs/DialogEdit"
import FormEdit from "./form-edit"



export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "options",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex justify-end text-right font-medium">
          <div className="flex gap-4">
            <DialogEdit
              title={`Tem certeza que deseja apagar este registro${payment.email}`}
              description={`${payment.email}`}
              handleConfirm={() => alert('Deletado')}
              handleCancel={() => alert('Cancelado')}
            >
              <FormEdit data={payment} />
            </DialogEdit>


            <DialogConfirmDelete
              title={`Tem certeza que deseja apagar este registro${payment.email}`}
              description={`${payment.email}`}
              handleConfirm={() => alert('Deletado')}
              handleCancel={() => alert('Cancelado')}
            />
          </div>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <div className="flex justify-end text-right font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]

