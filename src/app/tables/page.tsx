import { DataTable } from "@/components/tables/data-table"
import { Payment, columns } from "./columns"
import { columnsTableSorting } from "./columnsTableSorting"
import { DataTablePagination } from "@/components/tables/data-table-pagination";
import { DataTableSorting } from "@/components/tables/data-table-sorting";
import { DataTableWithFilter } from "@/components/tables/data-table-filter-search";

function generateRandomObjects(x: number) {
    const result = []
    type Status = 'pending' | 'success' | 'failed' | 'processing';
    const statuses: Status[] = ['pending', 'success', 'failed', "processing"]

    for (let i = 0; i < x; i++) {
        const randomObject = {
            id: Math.random().toString(36).substring(2, 10),
            amount: Math.floor(Math.random() * 1000),
            status: statuses[Math.floor(Math.random() * statuses.length)],
            email: Math.random().toString(36).substring(2, 10) + '@example.com',
        }
        result.push(randomObject)
    }
    return result
}

function getData() {
    return generateRandomObjects(30)
}

export default async function Tables() {


    const data: Payment[] = await getData()
    return (
        <div className="flex w-full flex-col gap-4 px-8 py-4 ">
            <header className="px-4">
                <h1 className="font-bold text-3xl" >Tables</h1>
            </header>
            <main className="container flex flex-col gap-4 px-4">
                <div>
                    <h1 className="text-2xl font-bold">Tabela Paginada</h1>
                    <DataTablePagination pageSize={5} columns={columns} data={data} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Tabela com Ordenação</h1>
                    <DataTableSorting pageSize={5} columns={columnsTableSorting} data={data} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Tabela com Filtros</h1>
                    <DataTableWithFilter pageSize={5} columns={columnsTableSorting} data={data} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Tabela Sem paginação</h1>
                    <DataTable columns={columns} data={data} />
                </div>
            </main>
        </div>
    )
}