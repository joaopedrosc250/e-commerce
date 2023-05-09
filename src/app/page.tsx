import { Footer } from "@/components/Footer";

import { Slider } from "@/components/Slider";
import Link from "next/link";

import { Nav } from "@/components/Nav";

import MainPage from "@/components/MainPage";

export default function Main() {

 

  return (
    <div id="" className="flex flex-col bg-white text-black">
      <Nav />
      <Slider />
      <div className="grid gap-24 xs:h-auto xs:grid-cols-1 xs:p-16 lg:h-auto lg:grid-cols-4 lg:p-20">
        <div className="xs:col-span-1 lg:col-span-4">
         
          <MainPage />
          <div className="grid justify-items-center">
            <Link
              href="/shop"
              className="rounded-3xl bg-zinc-900 p-2 font-semibold text-white transition-all ease-in-out hover:rounded-none"
            >
              See all the products
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
