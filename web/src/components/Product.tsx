'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ProductProps } from '@/@types/product'
import { Plus } from '@phosphor-icons/react'
import { useShoppingCart } from '../components/ShoppingCartContext'

export const Product = ({
  url,
  id,
  image,
  title,
  price,
}: ProductProps & { selectedProductId: number }) => {
  const {
    getItemQuantity,
    increaseCartContent,
    decreaseCartContent,
    removeFromCart,
  } = useShoppingCart()

  const unit = getItemQuantity(id)

  return (
    <div key={id} className="h-100 grid justify-items-center">
      <Link href={url} className="grid justify-items-center gap-2">
        <Image
          src={image}
          className="h-60 w-full object-cover transition-all"
          alt="image"
          width={1920}
          height={1080}
        />
        <p className="text-lg font-bold">{title}</p>
      </Link>
      <p className="mb-1 text-center">$ {price}</p>
      <div className="mt-auto w-full text-white">
        {unit === 0 ? (
          <div className="flex flex-row items-center justify-center gap-1 bg-blue-600">
            <Plus size={20} />
            <button onClick={() => increaseCartContent(id)} title="button">
              add to cart
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-black">
            <div className="flex items-center justify-center gap-2">
              <button title="button" onClick={() => increaseCartContent(id)}>
                +
              </button>
              <div>
                <span className="text-xl">{unit}</span> in cart
              </div>
              <button title="button" onClick={() => decreaseCartContent(id)}>
                -
              </button>
            </div>
            <button
              className="bg-red-500 p-1 text-center text-white"
              title="button"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
