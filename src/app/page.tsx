import { Footer } from "@/components/Footer";
import { Product } from "@/components/Product";
import { Slider } from "@/components/Slider";
import Link from "next/link";
import data from "./utils/data";
import { Nav } from "@/components/Nav";

export default function Main() {
  return (
    <div id="" className="flex flex-col bg-white text-black">
      <Nav />
      <Slider />
      <div className="grid gap-24 xs:h-auto xs:grid-cols-1 xs:p-16 lg:h-auto lg:grid-cols-4 lg:p-20">
        <div className="xs:col-span-1 lg:col-span-4">
          <div className="grid justify-items-center">
            <h3 className="text-xl font-bold xs:mt-0 lg:mt-12">T-shirts</h3>
            <div className="mt-6 grid w-5/6 items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
              {data.product
                .filter((element) => element.type == "tshirt")
                .slice(0, 4)
                .sort(() => Math.random() - 0.5)
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
          </div>
          <div className="grid justify-items-center">
            <h3 className="mt-12 text-xl font-bold">Caps</h3>
            <div className="mt-6 grid w-5/6 items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
              {data.product
                .filter((element) => element.type == "cap")
                .slice(0, 4)
                .sort(() => Math.random() - 0.5)
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
          </div>
          <div className="grid justify-items-center">
            <h3 className="mt-12 text-xl font-bold">Shoe</h3>
            <div className="mb-24 mt-6 grid w-5/6 items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
              {data.product
                .filter((element) => element.type == "shoe")
                .slice(0, 4)
                .sort(() => Math.random() - 0.5)
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
          </div>
          <div className="grid justify-items-center">
            <Link
              href="/shop"
              className="rounded-3xl bg-zinc-900 p-2 font-semibold text-white transition-all ease-in-out hover:rounded-none"
            >
              See all the products
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
