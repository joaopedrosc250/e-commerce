import Link from "next/link";
import { Search } from "../Search";
import Image from "next/image";

export const Nav = () => {
  return (
    <div className="flex lg:flex-row xs:flex-col justify-center items-center lg:gap-40 xs:gap-0">
      <div className="bg-white text-black flex lg:flex-row xs:flex-col lg:justify-around lg:items-center xs:justify-center xs:items-center p-2">
        <div className="flex lg:flex-row xs:flex-col justify-center lg:gap-40 xs:gap-2 items-center">
          <div>
            <a href="/" className="text-3xl">
              UrbanAvenue
            </a>
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
              <a
                className="hover:underline hover:underline-offset-2 focus:outline-none"
                href="/all"
              >
                Products
              </a>
            </li>
            <li>
              <a className="hover:underline hover:underline-offset-2" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:underline hover:underline-offset-2"
                href="/sign"
              >
                Sign up
              </a>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4 "
                href="/bag"
              >
                <Image
                  width={32}
                  height={40}
                  src={"/bag.png"}
                  className="hover:scale-125 transition-all"
                  alt="bag"
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4 "
                href="/fav"
              >
                <Image
                  width={40}
                  height={40}
                  src={"/love-icon.png"}
                  className="hover:scale-125 transition-all"
                  alt="bag"
                />
              </Link>
            </li>
            {/* <li>
              <Link
                className="hover:underline hover:underline-offset-4 "
                href="/profile/1"
              >
                <Image
                  width={40}
                  height={40}
                  src={"/profile.png"}
                  className="hover:scale-125 transition-all"
                  alt="bag"
                />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
