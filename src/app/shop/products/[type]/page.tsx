"use client";

import { Filter } from "@/components/Filter";
import { Footer } from "@/components/Footer";
import { Product } from "@/components/Product";
import { useEffect, useState } from "react";
import data from "@/app/utils/data";

export default function Products(props: any) {
  const [title, setTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data.product); // estado para armazenar a lista filtrada de produtos

  const prodType = props.params.type;

  console.log("renderizou");

  //hooks para alterar o título
  useEffect(() => {
    if (prodType === "tshirt") {
      setTitle("T-shirts");
    } else if (prodType === "cap") {
      setTitle("Caps ");
    } else if (prodType === "shoe") {
      setTitle("Shoes ");
    }
  }, [prodType]);

  function Best(size: string) {
    const filtered = data.product.filter((product) => product.size === size);
    setFilteredProducts(filtered);
  }

  function handleResetClick() {
    console.log("resetou");
    setFilteredProducts(data.product);
  }

  function lowestPrice(minPrice: number, maxPrice: number) {
    const filtered = data.product.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  }

  function higherPrice(minPrice: number, maxPrice: number) {
    const filtered = data.product.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  }

  return (
    <div id="" className="bg-white text-black flex flex-col">

      <div className="xs:h-auto grid xs:grid-cols-1 p-20 lg:grid-cols-4 gap-24 lg:h-auto">
        <div className="col-span-1">
          <Filter
            Best={data.product ? (size) => Best(size) : Best}
            onReset={handleResetClick}
            lowestPrice={lowestPrice}
            higherPrice={higherPrice}
          />
        </div>
        <div className="xs:col-span-1 lg:col-span-3">
          <div className="grid justify-items-center">
            <h3 className="font-bold text-2xl mb-5">{title}</h3>
            <div className="grid items-center lg:gap-10 xs:gap-20 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
              {filteredProducts
                .filter(
                  (element) => element.type == prodType || prodType === "all"
                )
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
