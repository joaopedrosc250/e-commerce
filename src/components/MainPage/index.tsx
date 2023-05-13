"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Product } from "../Product";
import { ProductProps } from "@/@types/product";

function Main() {
  const [data, setData] = useState<ProductProps[]>([]);
  const [load, setLoad] = useState(true);

  fetch("/api/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      setData(data);
      setLoad(false);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return (
    <Suspense>
      <div className="grid justify-items-center">
        <h3 className="text-xl font-bold xs:mt-0 lg:mt-12">T-shirts</h3>
        <div className="mt-6 grid w-5/6 items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {load && (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
          {data.slice(0, 4).map((element) => (
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
          {load && (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
          {data.slice(0, 4).map((element) => (
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
          {load && (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
          {data.slice(0, 4).map((element) => (
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
