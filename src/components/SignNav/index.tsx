import Link from "next/link";
import { Search } from "../Search";

export const Nav = () => {
  return (
    <div className="flex lg:flex-row xs:flex-col justify-center items-center lg:gap-40 xs:gap-0 bg-white text-black">
      <div className="flex lg:flex-row xs:flex-col lg:justify-around lg:items-center xs:justify-center xs:items-center p-2">
        <div className="flex lg:flex-row xs:flex-col justify-center lg:gap-40 xs:gap-2 items-center">
          <div>
            <Link href="/" className="text-3xl">
              UrbanAvenue
            </Link>
          </div>
          <div className="lg:relative md:relative xs:relative xs:p-2 md:p-4">
            <Search />
          </div>
        </div>
      </div>
      <div className="flex lg:justify-center lg:items-center xs:justify-end xs:items-end">
        <div className="flex lg:flex-row xs:flex-col xs:justify-end xs:items-end">
          <ul className="flex flex-row gap-6 justify-center items-center ">
            <li className="">
              <Link
                className="hover:underline hover:underline-offset-2 focus:outline-none"
                href="/shop"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
