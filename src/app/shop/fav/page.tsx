"use client"

import data from "@/app/utils/data";
import { Footer } from "@/components/Footer";
import ProductCart from "@/components/ProductCart";
import { Heart } from "@phosphor-icons/react";

function Fav() {
  return (
    <div className="flex h-auto flex-col items-center justify-center bg-white text-black">
      <div className="relative mb-10 mt-10 flex h-screen flex-col items-center justify-start rounded-3xl border-2 border-slate-500 bg-slate-50 xs:w-3/4 lg:w-2/4">
        <div className="absolute left-0 top-0 ml-12 mt-8">
          <Heart size={42} className="" />
          <p>Favorite</p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
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
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fav;
