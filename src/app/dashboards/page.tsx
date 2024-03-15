'use client'
import { CardInfo } from "@/components/cards/CardInfo"
import { Banknote, ListOrdered, PieChart } from "lucide-react";

import TyneBarCharts from "@/components/charts/tyne-bar-chart"
import PieCharts from "@/components/charts/pie-chart";

import { ProductProps, groups, popularProducts } from './mock'
import { CardRedirect } from "@/components/cards/CardRedirect";
import { formatMoeda } from '../../util/rotinas'
import TyneBarChartsHorizontal from "@/components/charts/tyne-bar-chart-horizontal";
export default function CardsStats() {


  const formatNumber = (delta: string) => {
    return new Intl.NumberFormat("pt-BR").format(Number(delta))
  }

  return (
    <div className="flex w-full flex-col gap-4 px-8 py-4 ">
      <header className="px-4">
        <h1 className="font-bold text-3xl" >Dashboards</h1>
      </header>

      <div className="flex flex-wrap gap-2">
        <CardInfo
          visual={{
            icon: ListOrdered
          }}
          color='green'
          title="Total de Pedidos"
          description={formatNumber("3000")} />
        <CardInfo
          visual={{
            icon: ListOrdered
          }}
          color='red'
          title="Pedidos em aberto"
          description={formatNumber("450")} />
        <CardInfo
          visual={{
            icon: Banknote
          }}
          title="Faturamento total:"
          description={formatMoeda("3000000")} />
        <CardInfo
          visual={{
            icon: Banknote
          }}
          color='yellow'
          title="Lucro esperado"
          description={formatMoeda("350000")} />
      </div>
      <main className="min-w-full flex h-full flex-col gap-4 overflow-hidden ">
        <div className="w-full flex gap-2">
          <div className="w-8/12 px-8 py-4 border-2 rounded-md ">
            <TyneBarCharts title="Resumo Financeiro" />
          </div>
          <div className="w-4/12 px-8 py-4 border-2 rounded-md ">

            <strong className="text-primary font-medium">Produtos + Vendidos</strong>
            <div className="mt-4 flex flex-col gap-3">
              {popularProducts.map((product: ProductProps) => (
                <CardRedirect key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-8/12 px-8 py-4 border-2 rounded-md ">
            <TyneBarChartsHorizontal title="Lucro x Mês" />
          </div>
          <div className="w-4/12 px-8 py-4 border-2 rounded-md ">

            <PieCharts data={groups} title="Vendas Por Categoria" />
          </div>
        </div>
      </main>
    </div >
  )
}