import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import Image from "next/image";
import data from "../../utils/data";

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
                    className="w-full h-[40rem] rounded-3xl"
                  />
                  <div className="flex flex-col gap-6 w-2/6">
                    <h2 className="font-bold text-2xl">{element.title}</h2>
                    <p className="text-xl">U${element.price}</p>
                    <div className="flex gap-2">
                      <input
                        type="button"
                        value="Add to cart"
                        className="bg-zinc-200 p-2 rounded-3xl hover:rounded-none transition-all"
                      />
                      <input
                        type="button"
                        value="Finish"
                        className="bg-zinc-200 p-2 rounded-3xl hover:rounded-none transition-all"
                      />
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div className="flex justify-center items-center">
            <p className="indent-12 xs:w-5/6 lg:w-3/6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              corporis harum, unde quisquam facere nulla neque quas provident
              voluptatibus blanditiis officia consequuntur, repellat quod enim!
              Ea, possimus? Obcaecati, architecto libero.
            </p>
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
