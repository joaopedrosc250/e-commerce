import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import Image from "next/image";
import data from "../../utils/data";
import Link from "next/link";

export default function PageProduct(props: any) {
  const prodId = props.params.id;

  return (
    <div className="flex flex-col h-auto bg-white text-black">
      <Nav />
      <div className="flex flex-row gap-20 justify-center items-center lg:h-auto xs:h-auto">
        <div className="flex flex-col justify-center gap-16 items-center mt-20">
          <div className="flex lg:flex-row xs:flex-col gap-32 justify-center items-center">
            {data.product
              .filter((element) => element.id == prodId)
              .map((element) => (
                <>
                  <Image
                    width={1920}
                    height={1080}
                    key={element.id}
                    src={element.image}
                    alt={element.type}
                    className="w-full lg:h-[40rem] xs:h-[18rem] rounded-3xl"
                  />
                  <div className="flex flex-col justify-center lg:items-start xs:items-center gap-4 w-2/6">
                    <h2 className="font-bold text-2xl">{element.title}</h2>
                    <p className="text-xl">U${element.price}</p>
                    <p className="text-xl text-lime-500">In stock</p>
                    <div className="flex lg:flex-row xs:flex-row justify-center gap-2">
                      <Link
                        type="button"
                        href="/bag"
                        className="bg-zinc-200 p-2 flex justify-center items-center text-center rounded-3xl hover:rounded-none transition-all"
                      >
                        Add to bag
                      </Link>
                      <Link
                        type="button"
                        href="/bag"
                        className="bg-zinc-200 p-2 flex justify-center items-center rounded-3xl hover:rounded-none transition-all"
                      >
                        Finish
                      </Link>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div className="flex justify-center items-center">
            {data.product
              .filter((element) => element.id == prodId)
              .map((element) => (
                <>
                  <p className="xs:w-5/6 lg:w-full text-xl">{element.desc}</p>
                </>
              ))}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="mt-10 text-xl">Other products</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-5 xs:grid-cols-1 md:grid-cols-2 mt-6 mb-24">
              {data.product
                .sort(() => Math.random() - 0.5)
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
