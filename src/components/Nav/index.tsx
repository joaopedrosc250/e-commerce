import Link from "next/link";
import { Search } from "../Search";

export const Nav = () => {
  return (
    <div className="flex lg:flex-row xs:flex-col justify-around items-center p-6">
      <div>
        <a href="/" className="text-3xl">UrbanAvenue</a>
      </div>
      <div className="grid col-start-3 justify-items-center lg:absolute xs:relative xs:p-2">
        <Search />
      </div>
      <div className="">
        <ul className="flex flex-row gap-6 justify-center items-center">
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
                Login
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
              <Link className="hover:underline hover:underline-offset-4 " href="#">
                <img src="/bag.png" className="h-10 hover:scale-125 transition-all" alt="bag" />
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:underline-offset-4 " href="#">
                <img src="/love-icon.png" className="h-10 hover:scale-125 transition-all" alt="bag" />
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
};
