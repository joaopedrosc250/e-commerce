import { Footer } from "@/components/Footer";
import { Product } from "@/components/Product";
import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export const All = () => {

  const product = [
    /* best-sellers */

    {
      title: "t-shirt-1",
      type: "best",
      id: "1",
      url: "/pageproduct",
      size: "G",
      image: "./t-shirt-1.jpg",
      price: 54.95,
    },
    {
      title: "t-shirt-2",
      id: "2",
      type: "best",
      url: "/pageproduct",
      size: "G",
      image: "t-shirt-2.jpg",
      price: 60.95,
    },
    {
      title: "t-shirt-3",
      type: "best",
      id: "1",
      url: "/pageproduct",
      size: "G",
      image: "./t-shirt-3.jpg",
      price: 54.95,
    },
    {
      title: "t-shrit-4",
      id: "2",
      type: "best",
      url: "/pageproduct",
      size: "G",
      image: "cap-1.jpg",
      price: 60.95,
    },

    /* t-shirts 👕 */

    {
      title: "t-shirt-1",
      type: "tshirt",
      id: "1",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 54.95,
    },
    {
      title: "t-shrit-2",
      id: "2",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 60.95,
    },
    {
      title: "t-shirt-3",
      id: "3",
      type: "tshirt",
      url: "/pageproduct",
      size: "M",
      image: "/t-shirt-3.jpg",
      price: 67.8,
    },
    {
      title: "t-shirt-4",
      id: "4",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 150,
    },
    {
      title: "t-shirt-5",
      id: "5",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 130.99,
    },
    {
      title: "t-shirt-6",
      id: "6",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 130,
    },
    {
      title: "t-shirt-7",
      id: "7",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 155,
    },
    {
      title: "t-shirt-8",
      id: "8",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 130,
    },
    {
      title: "t-shirt-9",
      id: "9",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 125,
    },
    {
      title: "t-shirt-10",
      id: "10",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 125,
    },
    {
      title: "t-shirt-11",
      id: "11",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 130,
    },
    {
      title: "t-shirt-12",
      id: "12",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 129.9,
    },
    {
      title: "t-shirt-13",
      id: "13",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 137,
    },

    /* caps 🧢 */

    {
      title: "cap-1",
      id: "1",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 69.9,
    },
    {
      title: "cap-2",
      id: "1",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 74.95,
    },
    {
      title: "cap-3",
      id: "1",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 89.99,
    },
    {
      title: "cap-4",
      id: "1",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 67.8,
    },

    /* Shoe 👟 */

    {
      title: "shoe-1",
      id: "1",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-1.png",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "1",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1.jpg",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "1",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-2.png",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "1",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-3.png",
      price: 69.99,
    },
  ];


  interface Props {
    best: () => void;
    onReset: () => void;
    lowestPrice: () => void;
    higherPrice: () => void;
  }

  const [tshirt, setTshirts] = useState(product);

  return (
    <div className="flex flex-col bg-white text-black">
      <Nav />
      <div className="xs:h-auto grid xs:grid-cols-1 p-20 lg:grid-cols-4 lg:gap-24 lg:h-auto">
        <div className="grid lg:justify-items-start xs:justify-items-center col-span-1 lg:grid-rows-4 xs:grid-rows-1 w-full xs:row-start-1 lg:row-start-1">
          <nav className="flex flex-col gap-6 lg:p-20 xs:p-0">
            <strong className="">Categories</strong>
            <ul className="flex flex-col gap-2 justify-center items-center">
              <li>
                <a href="#tshirts" className="">
                  T-shirts 👕
                </a>
              </li>
              <li>
                <a href="#caps">Caps 🧢</a>
              </li>
              <li>
                <a href="#shoes">Shoes 👟</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="tshirts" className="xs:col-span-1 lg:col-span-3">
          <div className="grid justify-items-center mt-16">
            <h3 className="font-bold">T-shirts</h3>
            <div className="grid items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {product
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
              <span className={`${tshirt.length != 0 ? "hidden" : "block"}`}>
                empty
              </span>
            </div>
            <Link
              href="/products/tshirt"
              className="border-2 bg-slate-100 p-2 w-fit rounded-3xl"
            >
              See more
            </Link>
          </div>
          <div id="caps" className="grid justify-items-center">
            <h3 className="mt-16 font-bold">Caps</h3>
            <div className="grid items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {product
                .filter((element) => element.type == "cap")
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
              <span className={`${tshirt.length != 0 ? "hidden" : "block"}`}>
                empty
              </span>
            </div>
            <Link
              href="/products/cap"
              className="border-2 bg-slate-100 p-2 w-fit rounded-3xl"
            >
              See more
            </Link>
          </div>
          <div id="shoes" className="grid justify-items-center mb-24">
            <h3 className="mt-16 font-bold">Shoes</h3>
            <div className="grid justify-items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {product
                .filter((element) => element.type == "shoe")
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
              <span className={`${tshirt.length != 0 ? "hidden" : "block"}`}>
                empty
              </span>
            </div>
            <Link
              href="/products/shoe"
              className="flex justify-center border-2 bg-slate-100 p-2 w-fit rounded-3xl"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
