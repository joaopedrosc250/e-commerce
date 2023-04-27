import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import Image from "next/image";
import data from "../utils/data";

export default function Bag() {
  return (
    <div className="bg-white flex flex-col gap-20 text-black lg:h-auto xs:h-auto">
      <Nav />
      <div className="flex lg:flex-row xs:flex-col justify-center gap-20 items-center w-full h-full">
        <div className="flex flex-col justify-center items-center gap-14">
          <div className="flex flex-row gap-2 justify-center items-center">
            <h2 className="font-bold text-3xl">Bag</h2>
            <Image width={40} height={45} src={"/bag.png"} alt="bag" />
          </div>
          <div className="bg-slate-100 rounded-3xl lg:p-[20rem] xs:p-[10rem]">
            aaa
          </div>
        </div>
        <div className="bg-slate-100 rounded-3xl p-[10rem]">valor</div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="mt-10 text-xl">Other products</h3>
        <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-5 xs:grid-cols-1 md:grid-cols-2 mt-6 mb-24">
          {data.product
            .filter((element) => element)
            .slice(0, 5)
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
      <Footer />
    </div>
  );
}
