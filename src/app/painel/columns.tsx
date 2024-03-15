"use client"


import { ColumnDef } from "@tanstack/react-table"

import Image from "next/image"


export type Order = {
    Cod_Loja: number,
    Cod_Orcame: number,
    Sta_Movime: string,
    Cod_Movime?: number,
    Num_Docume?: number,
    Tip_Entreg: string,
    Cod_ForPag: number,
    Tip_ForPag: string,
    Qtd_Parcel?: number,
    Dat_Emissa: string,
    Dat_Regist: string,
    Cod_EndFon: string,
    Cod_Vended: number,
    Cod_Client: number,
    Nom_Client: string,
    Per_Descon: string,
    Val_Descon: string,
    Val_Movime: string,
    Val_Troca: string,
    Num_CarFid?: number,
    Est_ConReg?: number,
    Num_ConReg?: number,
    Num_Receit?: number,
    Dat_EmiRec?: number,
    Num_CpfCgc: string,
    Nom_UsuEsp?: number,
    Val_Subsid: string,
    Flg_Reaber: false,
    Cod_Conven: number,
    Flg_CpfEcf: true,
    Num_CntCup?: number,
    Cod_DAV?: number,
    Val_DscKpm: string,
    Flg_Confer?: number,
    Nom_LogCnf?: number,
    Dat_Confer?: number,
    Num_FonCel?: number,
    Val_DscLvp: string,
    Flg_Atacarejo: false,
    Isn_PedEle?: number,
    Des_LayPed?: number,
    Tip_VenExt?: number,
    Num_Cesta?: number,
    Num_CpfFidRedSom?: number,
    Des_TipDadFid: string,
    Cod_Integr: number
}

import convenioImg from '../../assets/convenio.png'
import iFoodImg from '../../assets/ifood.png'
import rappiImg from '../../assets/rappi.png'

const partners = [
    {
        cod: 1,
        descricao: 'INFARMA VAREJO',
        img: convenioImg
    },
    {
        cod: 2,
        descricao: 'IFOOD',
        img: iFoodImg
    },
    {
        cod: 3,
        descricao: 'LINKEDFARMA',
        img: convenioImg
    },
    {
        cod: 4,
        descricao: 'FCIA APP',
        img: convenioImg
    },
    {
        cod: 5,
        descricao: 'DEWAY',
        img: convenioImg
    },
    {
        cod: 6,
        descricao: 'SUA SAUDE',
        img: convenioImg
    },
    {
        cod: 7,
        descricao: 'RAPPI',
        img: rappiImg
    },
    {
        cod: 8,
        descricao: 'ELEVAR',
        img: convenioImg
    },
    {
        cod: 9,
        descricao: 'DPHARMA',
        img: convenioImg
    },
    {
        cod: 10,
        descricao: 'INFARMA CONVENIO WEB',
        img: rappiImg
    },
]


export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "Cod_Integr",
        header: () => <div className="flex justify-start ">Tipo</div>,
        cell: ({ row }) => {
            const partnerCurrent = partners.find(partner => partner.cod === row.getValue('Cod_Integr'))

            return <div className="flex justify-start text-center">
                <Image
                    className=" rounded-md"
                    src={partnerCurrent ? partnerCurrent.img : ''}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                />
            </div>

        },
    },
    {
        accessorKey: "Cod_Client",
        header: () => <div className="flex justify-start ">Tipo</div>,
        cell: ({ row }) => {
            const order = row.original
            return <div className="flex flex-col justify-start items-start font-medium py-1 ">
                <div className="flex gap-2">
                    <span className="font-bold text-[16px] min-w-[60px]">Pedido:</span>
                    <span className="text-[16px] font-semibold">{order.Cod_Orcame}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold text-[16px] min-w-[60px]">Loja:</span>
                    <span className="text-[16px] font-semibold">{order.Cod_Loja}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold text-[16px] min-w-[60px]">Cliente:</span>
                    <span className="text-[16px] font-semibold">{order.Nom_Client}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold text-[16px] min-w-[60px]">Origem:</span>
                    <span className="text-[16px] font-semibold">{order.Cod_Integr}</span>
                </div>
            </div>
        },
    },
    {
        accessorKey: "Val_Movime",
        header: () => <div className="text-center ">Valor</div>,
        cell: ({ row }) => {
            const order = row.original

            const formatted = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(Number(order.Val_Movime))

            return <div className="flex justify-center items-center flex-col ">
                <div className="flex justify-center">
                    <span className="font-bold">
                        {formatted}
                    </span>
                </div>
                <div className="bg-green-400 rounded-md flex justify-center py-2 px-8">
                    <span className="text-white font-bold">
                        {order.Sta_Movime === 'F' ? "Aberto" : ""}
                    </span>
                </div>
            </div>
        }
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const order = row.original
    //         return (
    //             <div className="text-right ">
    //                 <DropdownMenu>
    //                     <DropdownMenuTrigger asChild>
    //                         <Button variant="ghost" className="h-8 w-8 p-0">
    //                             <span className="sr-only">Open menu</span>
    //                             <MoreHorizontal className="h-4 w-4" />
    //                         </Button>
    //                     </DropdownMenuTrigger>
    //                     <DropdownMenuContent align="end">
    //                         <div
    //                         // className="bg-red-400"
    //                         >
    //                             <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                             <DropdownMenuItem
    //                                 onClick={() => navigator.clipboard.writeText(order.Cod_Orcame)}
    //                             >
    //                                 Copy order ID
    //                             </DropdownMenuItem>
    //                             <DropdownMenuSeparator />
    //                             <DropdownMenuItem>View customer</DropdownMenuItem>
    //                             <DropdownMenuItem>View order details</DropdownMenuItem>
    //                         </div>
    //                     </DropdownMenuContent>
    //                 </DropdownMenu>
    //             </div>
    //         )
    //     },
    // }
]