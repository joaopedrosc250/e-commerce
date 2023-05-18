'use client'

import { Heart } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'
import SizeSelection from './SizeSelection'
import { PageProductProps } from '@/@types/pageProduct'

function PageProductInfo({ id, title, price, stock }: PageProductProps) {
  return (
    <div
      key={id}
      className=" flex w-3/6 flex-col justify-center gap-4 xs:items-center lg:items-start"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl">U${price}</p>
      <p className="text-xl text-lime-500">{stock} in stock</p>
      <Link
        type="button"
        href="/shop/fav"
        className="flex flex-row items-center justify-center gap-1 rounded-3xl bg-red-500 p-1 text-center text-white transition-colors ease-in-out hover:bg-red-600"
      >
        <Heart size={24} />
        <p>Add to fav</p>
      </Link>
      <div className="flex justify-center gap-2 xs:flex-row lg:flex-row">
        <Link
          type="button"
          href="/shop/cart"
          className="flex flex-row items-center justify-center rounded-3xl bg-zinc-900 p-2 text-center text-white transition-all ease-in-out hover:rounded-none"
        >
          <p className="">Add to cart</p>
        </Link>
        <Link
          type="button"
          href="#"
          className="flex items-center justify-center rounded-3xl bg-zinc-900 p-2 text-white transition-all ease-in-out hover:rounded-none"
        >
          Finish
        </Link>
      </div>
      <SizeSelection />
    </div>
  )
}

export default PageProductInfo
