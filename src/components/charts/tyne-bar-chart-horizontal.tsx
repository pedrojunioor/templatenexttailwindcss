'use client'

import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Legend, Tooltip, XAxis, CartesianGrid, YAxis } from 'recharts';

const data = [
    {
        name: 'Jan',
        Lucro: 4000,
        Despesa: 2400
    },
    {
        name: 'Fev',
        Lucro: 3000,
        Despesa: 1398
    },
    {
        name: 'Mar',
        Lucro: 2000,
        Despesa: 9800
    },
    {
        name: 'Abr',
        Lucro: 2780,
        Despesa: 3908
    },
    {
        name: 'Mai',
        Lucro: 1890,
        Despesa: 4800
    },
    {
        name: 'Jun',
        Lucro: 2390,
        Despesa: 3800
    },
    {
        name: 'Jul',
        Lucro: 3490,
        Despesa: 4300
    },
    {
        name: 'Ago',
        Lucro: 2000,
        Despesa: 9800
    },
    {
        name: 'Set',
        Lucro: 2780,
        Despesa: 3908
    },
    {
        name: 'Out',
        Lucro: 1890,
        Despesa: 4800
    },
    {
        name: 'Nov',
        Lucro: 2390,
        Despesa: 3800
    },
    {
        name: 'Dez',
        Lucro: 3490,
        Despesa: 4300
    }
]


type BarChartProps = {
    title: string
}

export default function TyneBarChartsHorizontal({ title }: BarChartProps) {

    return (
        <div className='w-full'>
            <div className='-px-8'>
                <span className='text-xl font-semibold'>{title}</span>
            </div>
            <ResponsiveContainer height={500} width={'100%'}>

                <BarChart
                    layout='vertical'
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 10,
                        bottom: 20
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2 0 0" vertical />
                    <XAxis type="number" dataKey="Lucro" />

                    <YAxis type='category' dataKey="name" />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="Lucro" isAnimationActive={false} fill="#109010" />

                </BarChart>

            </ResponsiveContainer>
        </div>
    )
}
