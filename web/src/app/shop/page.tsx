import { Footer } from '@/components/Footer'
import { Product } from '@/components/Product'
import Link from 'next/link'
import data from '../utils/data'

export default function All() {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="grid p-20 xs:h-auto xs:grid-cols-1 lg:h-auto lg:grid-cols-4 lg:gap-24">
        <div className="col-span-1 grid w-full xs:row-start-1 xs:grid-rows-1 xs:justify-items-center lg:row-start-1 lg:grid-rows-4 lg:justify-items-start">
          <nav className="flex flex-col gap-6 font-alt xs:p-0 lg:p-20">
            <strong className="">Categories</strong>
            <ul className="flex flex-col items-center justify-center gap-2">
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
          <div className="mt-16 grid justify-items-center gap-4">
            <h3 className="text-xl font-bold">T-shirts</h3>
            <div className="mt-6 grid items-center font-alt xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {data.product
                .filter((element) => element.type === 'tshirt')
                .slice(0, 4)
                .map(
                  (
                    element, // const linha 65
                  ) => (
                    <Product
                      url={element.url}
                      key={element.id}
                      id={element.id}
                      image={element.image}
                      title={element.title}
                      price={element.price}
                      type={''}
                      size={''}
                      desc={''}
                      stock={0}
                    />
                  ),
                )}
            </div>
            <Link
              href="/shop/products/tshirt"
              className="w-fit rounded-3xl bg-slate-900 p-2 font-sans font-semibold text-white transition-all ease-in-out hover:rounded-none"
            >
              See more
            </Link>
          </div>
          <div id="caps" className="grid justify-items-center gap-4">
            <h3 className="mt-16 text-xl font-bold">Caps</h3>
            <div className="mt-6 grid items-center font-alt xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {data.product
                .filter((element) => element.type === 'cap')
                .slice(0, 4)
                .map((element) => (
                  <Product
                    url={element.url}
                    id={element.id}
                    key={element.id}
                    image={element.image}
                    title={element.title}
                    price={element.price}
                    type={''}
                    size={''}
                    desc={''}
                    stock={0}
                  />
                ))}
            </div>
            <Link
              href="/shop/products/cap"
              className="w-fit rounded-3xl bg-slate-900 p-2 font-sans font-semibold text-white transition-all ease-in-out hover:rounded-none"
            >
              See more
            </Link>
          </div>
          <div id="shoes" className="mb-24 grid justify-items-center gap-4">
            <h3 className="mt-16 text-xl font-bold">Shoes</h3>
            <div className="mt-6 grid justify-items-center font-alt xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {data.product
                .filter((element) => element.type === 'shoe')
                .slice(0, 4)
                .map((element) => (
                  <Product
                    url={element.url}
                    id={element.id}
                    key={element.id}
                    image={element.image}
                    title={element.title}
                    price={element.price}
                    type={''}
                    size={''}
                    desc={''}
                    stock={0}
                  />
                ))}
            </div>
            <Link
              href="/shop/products/shoe"
              className="w-fit rounded-3xl bg-slate-900 p-2 font-sans font-semibold text-white transition-all ease-in-out hover:rounded-none"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
