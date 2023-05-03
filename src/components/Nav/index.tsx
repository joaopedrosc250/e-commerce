import Link from "next/link";
import { Search } from "../Search";

export const Nav = () => {
  return (
    <div className="flex lg:flex-row xs:flex-col justify-center items-center lg:gap-40 xs:gap-0 bg-white text-black p-2">
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
      <div className="flex flex-row lg:justify-center lg:items-center xs:justify-end xs:items-end">
        <ul className="flex flex-row gap-6 justify-center items-center ">
          <li className="">
            <Link
              className="hover:underline hover:underline-offset-2 focus:outline-none"
              href="/shop"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link className="hover:underline hover:underline-offset-2" href="#">
              Sign in
            </Link>
          </li>
          <li>
            <Link
              className="font-bold hover:underline hover:underline-offset-2"
              href="/home/sign"
            >
              Sign up
            </Link>
          </li>
          <li>
            <Link
              className="fa fa-shopping-cart scale-125 hover:underline hover:underline-offset-4 "
              href="/shop/cart"
            ></Link>
          </li>
          <li>
            <Link
              className="fa fa-heart scale-125 hover:underline hover:underline-offset-4 "
              href="/shop/fav"
            ></Link>
          </li>
         {/* { <li>
            <Link
              className="fa fa-user scale-125 hover:underline hover:underline-offset-4 "
              href="/home/profile/1"
            ></Link>
          </li>} */}
          {/* <li>
            <Link
              href="/"
              className="fa fa-bars lg:hidden xs: scale-125"
            ></Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
