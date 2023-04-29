"use client";

import React, { useState } from "react";
import data from "@/app/utils/data";
import { ProductSearch } from "../ProductSearch";

function FilterSearch() {
  const [showResults, setShowResults] = useState(false);

  const handleClick = () => {
    setShowResults(true);
  };
  const handleOff = () => {
    setShowResults(false);
  };
  return (
    <div className="bg-white ">
      <input
        type="text"
        placeholder="Search..."
        onClick={handleClick}
        onBlur={handleOff}
        className="border-none bg-none outline-none p-0 transition-all duration-500 focus:outline-zinc-200 focus:rounded-2xl focus:px-3 focus:shadow-2xl focus:bg-zinc-50 w-full"
      />
      <div
        className={
          showResults
            ? "absolute mt-4 flex flex-col gap-2 bg-white w-3/4 justify-start items-start p-2 border rounded-2xl"
            : "hidden"
        }
      >
        {data.product.slice(0, 5).map((element) => (
          <ProductSearch
            url={element.url}
            id={element.id}
            key={element.id}
            title={element.title}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterSearch;
