/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import { DropDownAvatar } from "@/components/DropDownAvatar"
import { SelectStores } from "@/components/SelectStores"
import { Order, columns } from "./columns"
import { DataTable } from "./data-table"
import { useAuthentication } from "@/hooks/useAuth"
import api from "@/services/api"
import Cookie from "js-cookie"
import { MagnifyingGlass } from 'react-loader-spinner'

type OptionsSelect = {
    label: string
    value: number
}

export default function Painel() {

    const { stores } = useAuthentication()

    const [data, setData] = useState<Order[]>([])

    const [storeSelected, setStoreSelected] = useState<number | null>(null)

    const [storesOptionSelect, setStoreOptionsSelect] = useState<OptionsSelect[]>([])

    const [loadingData, setLoadingData] = useState<boolean>(false)

    async function getData() {
        setLoadingData(true)
        api.get(`/budgets/findByStore?codLoja=${Cookie.get('storeCurrent')}`, {
            headers: {
                Authorization: `Bearer ${Cookie.get('token')}`
            }
        }).then(res => {
            setLoadingData(false)
            setData(res.data)
        }).catch(err => {
            setLoadingData(false)
            console.log(err)
        })
    }

    function handleChangeStoreSelected(e: any) {
        Cookie.set('storeCurrent', e)
        setStoreSelected(e)
    }

    useEffect(() => {
        if (storeSelected) {
            getData()
        }
    }, [storeSelected])


    useEffect(() => {
        if (stores !== undefined) {
            const temp = stores.map(store => {
                return {
                    label: store.Description,
                    value: store.Cod_loja
                }
            })
            setStoreOptionsSelect(temp)

            if (stores.length === 1) {
                setStoreSelected(stores[0].Cod_loja)
            }
        }
    }, [stores])

    useEffect(() => {
        if (Cookie.get('storeCurrent')) {
            setStoreSelected(Number(Cookie.get('storeCurrent')))
            const intervalId = setInterval(() => getData(), 30000);
            return () => clearInterval(intervalId);
        }
    }, [])

    return (
        <div className=" h-full  bg-gradient-to-t from-background  to-blue-400">
            <header className="flex w-full justify-between px-8 py-4 ">
                <h1 className="text-2xl font-bold text-primary">Painel Gestor</h1>
                <div>
                    <DropDownAvatar />
                </div>
            </header>
            <main className="flex flex-col w-full ">
                <div className="w-full flex justify-center pb-2">
                    <div className="w-10/12 ">
                        {stores &&
                            <SelectStores handleSelectValue={handleChangeStoreSelected} defaultStore={storeSelected !== null ? String(storeSelected) : ""} options={storesOptionSelect} />
                        }
                    </div>
                </div>
                <div className="container mx-auto py-4 bg-background rounded-lg ">
                    {loadingData ?
                        <div className="flex w-full justify-center items-center">
                            <MagnifyingGlass
                                visible={loadingData}
                                height="80"
                                width="80"
                                ariaLabel="magnifying-glass-loading"
                                wrapperStyle={{}}
                                wrapperClass="magnifying-glass-wrapper"
                                glassColor="#c0efff"
                                color="#e15b64"
                            />
                        </div>
                        :
                        <DataTable columns={columns} data={data} showHeader={false} pageSize={data.length} showPagination={false} />
                    }
                </div>
            </main >
        </div>
    )
}