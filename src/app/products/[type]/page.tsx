import { Filter } from "@/components/Filter";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import { useEffect, useState } from "react";

interface ProductItem {
  title: string;
  type: string;
  id: string;
  url: string;
  size: string;
  image: string;
  price: number;
}

export default function Products (props: any) {
  const [title, setTitle] = useState("");


  const product = [
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

  const prodType = props.params.type;

  useEffect(() => {
    if (prodType === "tshirt") {
      setTitle("T-shirts 👕");
    } else if (prodType === "cap") {
      setTitle("Caps 🧢");
    } else if (prodType === "shoe") {
      setTitle("Shoes 👟");
    }
  }, [prodType]);

  const [filteredProducts, setFilteredProducts] = useState(product); // estado para armazenar a lista filtrada de produtos
  const handleFilter = (type: string) => {
    // Função de callback para filtrar os produtos com base no tipo
    const filteredProducts = product.filter((product) => product.type === type);
    setFilteredProducts(product); // atualiza o estado com a lista filtrada de produtos
  };

  function best(size: string) {}

  function handleResetClick() {
    console.log("resetou");
  }

  function lowestPrice(minPrice: number, maxPrice: number) {}
  function higherPrice(minPrice: number, maxPrice: number) {}

  return (
    <div id="" className="bg-white text-black flex flex-col">
      <Nav />
      <div className="xs:h-auto grid xs:grid-cols-1 p-20 lg:grid-cols-4 gap-24 lg:h-auto">
        <div className="grid lg:justify-items-start xs:justify-items-center col-span-1 lg:grid-rows-4 xs:grid-rows-1 w-full xs:row-end-3 lg:row-start-1">
          <Filter
            best={product ? (size) => best(size) : best}
            onReset={handleResetClick}
            lowestPrice={lowestPrice}
            higherPrice={higherPrice}
          />
        </div>
        <div className="xs:col-span-1 lg:col-span-3">
          <div className="grid justify-items-center">
            <h3 className="font-bold text-2xl mb-5">{title}</h3>
            <div className="grid items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {product
                .filter((element) => element.type == prodType)
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
              <span
                className={`xs:h-screen lg:h-auto xs:col-span-1 lg:col-span-3 grid justify-items-center text-2xl ${
                  product.length != 0 ? "hidden" : "block"
                } font-bold`}
              >
                empty
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
