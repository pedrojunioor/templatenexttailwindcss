'use client'

import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Legend, Tooltip, LabelList, Label, XAxis, CartesianGrid, YAxis } from 'recharts';

const data = [
    {
        name: 'Jan',
        Receita: 4000,
        Despesa: 2400
    },
    {
        name: 'Fev',
        Receita: 3000,
        Despesa: 1398
    },
    {
        name: 'Mar',
        Receita: 2000,
        Despesa: 9800
    },
    {
        name: 'Abr',
        Receita: 2780,
        Despesa: 3908
    },
    {
        name: 'Mai',
        Receita: 1890,
        Despesa: 4800
    },
    {
        name: 'Jun',
        Receita: 2390,
        Despesa: 3800
    },
    {
        name: 'Jul',
        Receita: 3490,
        Despesa: 4300
    },
    {
        name: 'Ago',
        Receita: 2000,
        Despesa: 9800
    },
    {
        name: 'Set',
        Receita: 2780,
        Despesa: 3908
    },
    {
        name: 'Out',
        Receita: 1890,
        Despesa: 4800
    },
    {
        name: 'Nov',
        Receita: 2390,
        Despesa: 3800
    },
    {
        name: 'Dez',
        Receita: 3490,
        Despesa: 4300
    }
]


type BarChartProps = {
    title: string
}

export default function TyneBarCharts({ title }: BarChartProps) {

    return (
        <div className='w-full'>
            <div className='-px-8'>
                <span className='text-xl font-semibold'>{title}</span>
            </div>
            <ResponsiveContainer height={400} width={'100%'}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: -10,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Receita" fill="#0ea5e9" />
                    <Bar dataKey="Despesa" fill="#ea580c" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
