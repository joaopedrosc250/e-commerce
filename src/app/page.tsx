import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import { Slider } from "@/components/Slider";
import Link from "next/link";

export default function Main() {
  
  const product = [
    /* best-sellers */

    {
      title: "t-shirt-1",
      type: "best",
      id: "22",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 54.95,
    },
    {
      title: "t-shirt-2",
      id: "23",
      type: "best",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 60.95,
    },
    {
      title: "t-shirt-3",
      type: "best",
      id: "24",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 54.95,
    },
    {
      title: "t-shrit-4",
      id: "25",
      type: "best",
      url: "/pageproduct",
      size: "G",
      image: "/cap-1.jpg",
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
      id: "14",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 69.9,
    },
    {
      title: "cap-2",
      id: "15",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 74.95,
    },
    {
      title: "cap-3",
      id: "16",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 89.99,
    },
    {
      title: "cap-4",
      id: "17",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 67.8,
    },

    /* Shoe 👟 */

    {
      title: "shoe-1",
      id: "18",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-1.png",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "19",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1.jpg",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "20",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-2.png",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "21",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-3.png",
      price: 69.99,
    },
  ];

  // const flickityOptions = {
  //   groupCells: 4,
  //   initialIndex: 2,
  //   autoPlay: true,
  //   draggable: true,
  //   pageDots: true,
  // };

  return (
    <div id="" className="flex flex-col bg-white text-black">
      <Nav />
      <Slider />
      <div className="xs:h-auto grid xs:grid-cols-1 p-20 lg:grid-cols-4 gap-24 lg:h-auto">
        <div className="xs:col-span-1 lg:col-span-4 ">
          <div className="grid justify-items-center">
            <h3 className="">Best Sellers</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {product
                .filter((element) => element.type == "best")
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
          <div className="grid  justify-items-center">
            <h3 className="mt-16">T-shirts</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {product
                .filter((element) => element.type == "tshirt")
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
          </div>
          <div className="grid justify-items-center">
            <h3 className="mt-16">Caps</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {product
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
          </div>
          <div className="grid justify-items-center">
            <h3 className="mt-16">Shoe</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6 mb-24">
              {product
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
          </div>
          <div className="grid justify-items-center">
            <Link
              href="/all"
              className="bg-zinc-700 text-white p-2 font-semibold rounded-xl hover:scale-105 hover:shadow-2xl transition-all"
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
