
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

interface ProductProps {
    id: string,
    product_name: string,
    product_thumbnail: string
    product_price: string
    product_stock: number
}

interface CardRedirectProps {
    product: ProductProps
}

import { formatMoeda } from '../../util/rotinas'

export function CardRedirect({ product }: CardRedirectProps) {
    return (
        <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="flex items-start hover:no-underline border rounded-md p-2"
        >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
                <Image
                    width={20}
                    height={20}
                    className="w-full h-full object-cover rounded-sm"
                    src={product.product_thumbnail}
                    alt={product.product_name}
                />
            </div>
            <div className="ml-4 flex-1">
                <p className="text-sm text-primary">{product.product_name}</p>
                <span
                    className={clsx("font-semibold", {
                        'text-red-500': product.product_stock === 0,
                        'text-orange-500':product.product_stock > 0 && product.product_stock <= 50,
                        'text-green-500': product.product_stock >= 50,
                    })}

                >
                    {product.product_stock === 0 ? 'Sem estoque' : product.product_stock + ' Em estoque'}
                </span>
            </div>
            <div className="text-xs text-foreground pl-1.5">{formatMoeda(product.product_price)}</div>
        </Link>

    )
}