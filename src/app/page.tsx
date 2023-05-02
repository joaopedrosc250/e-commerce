import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import { Slider } from "@/components/Slider";
import Link from "next/link";
import data from "./utils/data";

export default function Main() {
  return (
    <div id="" className="flex flex-col bg-white text-black">
      <Nav />
      <Slider />
      <div className="xs:h-auto grid xs:grid-cols-1 lg:p-20 xs:p-16 lg:grid-cols-4 gap-24 lg:h-auto">
        <div className="xs:col-span-1 lg:col-span-4 ">
          <div className="grid justify-items-center">
            <h3 className="lg:mt-12 xs:mt-0 font-bold text-xl">T-shirts</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
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
            <h3 className="mt-12 font-bold text-xl">Caps</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
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
            <h3 className="mt-12 font-bold text-xl">Shoe</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6 mb-24">
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
              href="/all"
              className="bg-zinc-900 text-white p-2 font-semibold rounded-3xl hover:scale-105 hover:shadow-2xl hover:rounded-none transition-all ease-in-out"
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
