import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterSearch from "../FilterSearch";

export const Search = () => {
  

  return (
    <div id="search-box" className="flex flex-row justify-center items-center">
      <div className="flex box-border gap-2">
       <FilterSearch />
        <Link href="">
          <Image
            width={33}
            height={35}
            src={"/icon.png"}
            alt="lupe"
            className="flex justify-center items-center"
          />
        </Link>
      </div>
    </div>
  );
};
