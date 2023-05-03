"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search } from "../Search";

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  return (
    <div className="flex w-full bg-white p-2 text-black xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:items-center lg:justify-evenly">
      <div className="flex items-center justify-center xs:flex-col xs:gap-1 lg:flex-row lg:gap-40 ">
        <div>
          <Link href="/" className="text-3xl">
            UrbanAvenue
          </Link>
        </div>
        <div className="xs:relative xs:p-2 md:relative md:p-4 lg:relative">
          <Search />
        </div>
      </div>
      <div className="flex lg:flex-col items-end justify-center ">
        <nav className="flex gap-4 xs:flex-col xs:items-center xs:justify-end lg:absolute lg:flex-row-reverse lg:items-center lg:justify-center">
          <button
            title="button"
            className={`fa fa-bars scale-125   ${
              isMobileMenuOpen ? "" : "text-black"
            }`}
            onClick={toggleMobileMenu}
          ></button>
          <div className="flex xs:flex-col xs:items-end xs:justify-end lg:flex-row-reverse lg:items-center lg:justify-center">
            <ul
              className={`flex xs:items-center xs:justify-center xs:gap-4 lg:items-center lg:justify-center lg:gap-6 ${
                isMobileMenuOpen
                  ? "hidden"
                  : " flex xs:flex-row lg:flex-row"
              }`}
            >
              <li>
                <Link className="" href="/shop">
                  Categories
                </Link>
              </li>
              <li>
                <Link className="" href="#">
                  Sign in
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="/home/sign">
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  className="fa fa-shopping-cart scale-125"
                  href="/shop/cart"
                ></Link>
              </li>
              <li>
                <Link className="fa fa-heart scale-125" href="/shop/fav"></Link>
              </li>
              {
                <li>
                  <Link
                    className="fa fa-user scale-125 "
                    href="/home/profile/1"
                  ></Link>
                </li>
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
