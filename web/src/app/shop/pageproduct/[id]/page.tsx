import { Footer } from '@/components/Footer'
import Image from 'next/image'
import data from '../../../utils/data'
import Link from 'next/link'

export default function PageProduct(props: any) {
  const prodId = props.params.id

  return (
    <div className="flex h-auto flex-col bg-white text-black">
      <div className="flex flex-row items-center justify-center gap-20 xs:h-auto lg:h-auto">
        <div className="mt-20 flex flex-col items-center justify-center gap-16">
          <div className="flex items-center justify-center gap-32 xs:flex-col lg:flex-row">
            {data.product
              .filter((element) => element.id === prodId)
              .map((element) => (
                <>
                  <Image
                    width={1920}
                    height={1080}
                    key={element.id}
                    src={element.image}
                    alt={element.type}
                    className="rounded-3xl xs:h-[16rem] xs:w-5/6 lg:h-[30rem] lg:w-full"
                  />
                  <div className="flex w-3/6 flex-col justify-center gap-4 xs:items-center lg:items-start">
                    <h2 className="text-2xl font-bold">{element.title}</h2>
                    <p className="text-xl">U${element.price}</p>
                    <p className="text-xl text-lime-500">
                      {element.stock} in stock
                    </p>
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
                  </div>
                </>
              ))}
          </div>
          <div className="mb-28 flex items-center justify-center">
            {data.product
              .filter((element) => element.id === prodId)
              .map((element) => (
                <>
                  <p className="text-xl xs:w-5/6 lg:w-full">{element.desc}</p>
                </>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
