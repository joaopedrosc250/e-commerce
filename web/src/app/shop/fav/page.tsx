'use client'

import data from '@/app/utils/data'
import { Footer } from '@/components/Footer'
import ProductCart from '@/components/ProductCart'
import { Heart } from '@phosphor-icons/react'

function Fav() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white text-black">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Heart size={42} className="" />
          <p className="text-center">Favorites</p>
        </div>
        <div className="mt-10 flex h-auto w-full flex-col items-center justify-center">
          {data.product
            .filter((element) => element.type)
            .slice(0, 1)
            .sort(() => Math.random() - 0.5)
            .map((element) => (
              <ProductCart
                id={element.id}
                key={element.id}
                image={element.image}
                title={element.title}
                price={element.price}
                unity={element.stock}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Fav
