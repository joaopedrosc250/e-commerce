import React from "react";
import { Product } from "../Product";
import data from "@/app/utils/data";

function Best() {
  return (
    <div className="grid justify-items-center">
      <h3 className="">Best Sellers</h3>
      <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 mt-6">
        {data.product
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
  );
}

export default Best;
