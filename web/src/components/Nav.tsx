'use client'

import Link from 'next/link'
import { Search } from './Search'
import { Heart, List, ShoppingCart, X } from '@phosphor-icons/react'
import { useState } from 'react'

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white p-4 text-black">
      <div className=" flex w-full p-2 xs:flex-row xs:items-center xs:justify-center xs:gap-10 md:gap-[30vh] lg:flex-row lg:items-center lg:justify-center lg:gap-56">
        <div className="flex items-center justify-center xs:flex-col xs:gap-1 lg:flex-row lg:gap-40 ">
          <Link href="/" className="text-4xl">
            UrbanAvenue
          </Link>
          <Search />
        </div>
        <div className="items-end justify-center gap-6 font-alt xs:hidden lg:flex lg:flex-row ">
          <Link className="hover:underline" href="/shop">
            Categories
          </Link>
          <Link className="hover:underline" href="/home/login">
            Sign in
          </Link>
          <Link className="font-bold hover:underline" href="/home">
            Register
          </Link>
          <Link className="" href="/shop/cart">
            <ShoppingCart size={30} />
          </Link>
          <Link className="" href="/shop/fav">
            <Heart size={30} />
          </Link>
          {/* {
                  <Link className="scale-125 " href="/home/profile/1">
                    <User size={30} />
                  </Link>
        } */}
        </div>
        <div className="flex lg:hidden">
          <button title="button" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={36} /> : <List size={36} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="h-[calc(100vh - 101px)] absolute left-0 top-32 w-full bg-white font-alt lg:hidden">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link className="hover:underline" href="/shop">
              Categories
            </Link>
            <Link className="hover:underline" href="/home/login">
              Sign in
            </Link>
            <Link className="font-bold hover:underline" href="/home">
              Sign up
            </Link>
            <Link className="" href="/shop/cart">
              <ShoppingCart size={30} />
            </Link>
            <Link className="" href="/shop/fav">
              <Heart size={30} />
            </Link>
            {/* <Link className="scale-125 " href="/home/profile/1">
              <User size={30} />
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  )
}
