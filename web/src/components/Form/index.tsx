"use client";

import Link from "next/link";
import { useState } from "react";

export const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center gap-8 bg-white bg-cover bg-center text-black xs:h-auto xs:flex-col xs:p-5 lg:h-screen lg:flex-row lg:p-0">
      <div className="flex w-full flex-row xs:items-center xs:justify-center lg:items-start lg:justify-start">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Link href="/">
            <h1 className="text-3xl">UrbanAvenue</h1>
          </Link>
          <p className="text-justify xs:w-3/4 lg:w-4/6">
            Discover the latest trends in urban fashion. With easy browsing,
            join us on the streetwear movement and elevate your wardrobe with
            our trendy and comfortable pieces.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 xs:w-2/3 lg:w-full">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-28 pb-16 shadow-2xl">
          <form
            action=""
            method="post"
            className="flex flex-col items-center justify-center gap-2"
          >
            <label className="mt-3 font-semibold">First name: </label>
            <input
              type="text"
              name="name"
              id="first"
              placeholder="type the first name..."
              className="rounded-xl border-2 p-2 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">Last name: </label>
            <input
              type="text"
              name="name"
              id="last"
              placeholder="type the last name..."
              className="rounded-xl border-2 p-2 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">E-mail: </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="type your better email..."
              className="rounded-xl border-2 p-2 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">Password: </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="type a secure password..."
              className="rounded-xl border-2 p-2 focus:outline-zinc-300"
              required
            />
            <button
              title="password"
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-600"
            ></button>
            <button
              title="submit"
              type="submit"
              value="Send"
              className="mt-8 rounded-xl bg-blue-600 p-2 text-white transition-all ease-in-out hover:rounded-none hover:bg-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
