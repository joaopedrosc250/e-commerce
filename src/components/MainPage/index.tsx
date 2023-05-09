"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Product } from "../Product";
import { ProductProps } from "@/@types/product";

function Main() {
  const [data, setData] = useState<ProductProps[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      });
  }, []);

  return (
    <Suspense>
      <div className="grid justify-items-center">
        <h3 className="text-xl font-bold xs:mt-0 lg:mt-12">T-shirts</h3>
        <div className="mt-6 grid w-5/6 items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {load && <p>Loading</p>}
          {data.map((element) => (
            <Product
              url={element.url}
              id={element.id}
              key={element.id}
              image={element.image}
              title={element.title}
              price={element.price}
              type={element.type}
              size={element.size}
              desc={element.desc}
              stock={0}
            />
          ))}
        </div>
      </div>
      <div className="grid justify-items-center">
        <h3 className="mt-12 text-xl font-bold">Cap</h3>
        <div className="mt-6 grid w-5/6 items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {data
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
                type={element.type}
                size={element.size}
                desc={element.desc}
                stock={0}
              />
            ))}
        </div>
      </div>
      <div className="grid justify-items-center">
        <h3 className="mt-12 text-xl font-bold">Shoe</h3>
        <div className="mb-24 mt-6 grid w-5/6 items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {data
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
                type={element.type}
                size={element.size}
                desc={element.desc}
                stock={0}
              />
            ))}
        </div>
      </div>
    </Suspense>
  );
}

export default Main;
