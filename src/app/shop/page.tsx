"use client";

import { Footer } from "@/components/Footer";
import { Product } from "@/components/Product";
import Link from "next/link";
import data from "../utils/data";

export default function All() {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="xs:h-auto grid xs:grid-cols-1 p-20 lg:grid-cols-4 lg:gap-24 lg:h-auto">
        <div className="grid lg:justify-items-start xs:justify-items-center col-span-1 lg:grid-rows-4 xs:grid-rows-1 w-full xs:row-start-1 lg:row-start-1">
          <nav className="flex flex-col gap-6 lg:p-20 xs:p-0">
            <strong className="">Categories</strong>
            <ul className="flex flex-col gap-2 justify-center items-center">
              <li>
                <a href="#tshirts" className="">
                  T-shirts
                </a>
              </li>
              <li>
                <a href="#caps">Caps </a>
              </li>
              <li>
                <a href="#shoes">Shoes </a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="tshirts" className="xs:col-span-1 lg:col-span-3">
          <div className="grid justify-items-center mt-16 gap-4">
            <h3 className="font-bold text-xl">T-shirts</h3>
            <div className="grid items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {data.product
                .filter((element) => element.type == "tshirt")
                .slice(0, 4)
                .map(
                  (
                    element //const linha 65
                  ) => (
                    <Product
                      url={element.url}
                      key={element.id}
                      id={element.id}
                      image={element.image}
                      title={element.title}
                      price={element.price}
                    />
                  )
                )}
            </div>
            <Link
              href="/shop/products/tshirt"
              className="text-white bg-slate-900 font-semibold p-2 w-fit rounded-3xl hover:rounded-none transition-all ease-in-out"
            >
              See more
            </Link>
          </div>
          <div id="caps" className="grid justify-items-center gap-4">
            <h3 className="mt-16 font-bold text-xl">Caps</h3>
            <div className="grid items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {data.product
                .filter((element) => element.type == "cap")
                .slice(0, 4)
                .map((element) => (
                  <Product
                    url={element.url}
                    id={element.id}
                    key={element.id}
                    image={element.image}
                    title={element.title}
                    price={element.price}
                  />
                ))}
            </div>
            <Link
              href="/shop/products/cap"
              className="text-white bg-slate-900 font-semibold p-2 w-fit rounded-3xl hover:rounded-none transition-all ease-in-out"
            >
              See more
            </Link>
          </div>
          <div id="shoes" className="grid justify-items-center mb-24 gap-4">
            <h3 className="mt-16 font-bold text-xl">Shoes</h3>
            <div className="grid justify-items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {data.product
                .filter((element) => element.type == "shoe")
                .slice(0, 4)
                .map((element) => (
                  <Product
                    url={element.url}
                    id={element.id}
                    key={element.id}
                    image={element.image}
                    title={element.title}
                    price={element.price}
                  />
                ))}
            </div>
            <Link
              href="/shop/products/shoe"
              className="text-white bg-slate-900 font-semibold p-2 w-fit rounded-3xl hover:rounded-none transition-all ease-in-out"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
