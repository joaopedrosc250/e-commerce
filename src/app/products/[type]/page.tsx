"use client";

import { Filter } from "@/components/Filter";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";
import { useEffect, useState } from "react";
import data from "@/app/utils/data";

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

  const prodType = props.params.type;

  useEffect(() => {
    if (prodType === "tshirt") {
      setTitle("T-shirts");
    } else if (prodType === "cap") {
      setTitle("Caps ");
    } else if (prodType === "shoe") {
      setTitle("Shoes ");
    }
  }, [prodType]);

  const [filteredProducts, setFilteredProducts] = useState(data.product); // estado para armazenar a lista filtrada de produtos

  const handleFilter = (type: string) => {
    // Função de callback para filtrar os produtos com base no tipo
    const filteredProducts = data.product.filter((product) => product.type === type);
    setFilteredProducts(data.product); // atualiza o estado com a lista filtrada de produtos
  };

  function best(size: string) {
    
  }

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
            best={data.product ? (size) => best(size) : best}
            onReset={handleResetClick}
            lowestPrice={lowestPrice}
            higherPrice={higherPrice}
          />
        </div>
        <div className="xs:col-span-1 lg:col-span-3">
          <div className="grid justify-items-center">
            <h3 className="font-bold text-2xl mb-5">{title}</h3>
            <div className="grid items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {data.product
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
                  data.product.length != 0 ? "hidden" : "block"
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
