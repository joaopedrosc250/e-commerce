'use client'

import Link from 'next/link'
import { useState } from 'react'

export const Form = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="grid h-screen justify-items-center gap-5 xs:grid-cols-1 xs:p-5 lg:grid-cols-2 lg:p-0">
      <div className="flex w-full flex-row xs:items-center xs:justify-center lg:items-center lg:justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Link href="/">
            <h1 className="xs:text-4xl lg:text-5xl">UrbanAvenue</h1>
          </Link>
          <p className="text-justify xs:w-3/4 xs:text-lg lg:w-4/6 lg:text-xl">
            Discover the latest trends in urban fashion. With easy browsing,
            join us on the streetwear movement and elevate your wardrobe with
            our trendy and comfortable pieces.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10 ">
        <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-white p-8 shadow-2xl xs:w-full lg:w-2/4">
          <h2 className="text-2xl">Create your account</h2>
          <form
            action=""
            method="post"
            className="flex flex-col items-start justify-center gap-1"
          >
            <label className="mt-3 font-semibold">First name: </label>
            <input
              type="text"
              id="first"
              title="name"
              className="rounded-xl border-2 p-2 px-4 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">Last name: </label>
            <input
              type="text"
              title="name"
              id="last"
              className="rounded-xl border-2 p-2 px-4 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">E-mail: </label>
            <input
              type="text"
              title="email"
              id="email"
              className="rounded-xl border-2 p-2 px-4 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">Password: </label>
            <input
              type={showPassword ? 'text' : 'password'}
              title="password"
              id="password"
              className="rounded-xl border-2 p-2 px-4 focus:outline-zinc-300"
              required
            />
            <button
              title="password"
              type="button"
              onClick={togglePasswordVisibility}
              className="flex cursor-pointer items-center text-gray-600"
            ></button>
          </form>
          <button
            title="submit"
            type="submit"
            value="Send"
            className="rounded-xl bg-blue-600 p-2 text-white transition-all ease-in-out hover:rounded-none hover:bg-black"
          >
            Submit
          </button>
        </div>
        <div className="flex flex-row gap-1">
          <p>I have an account.</p>
          <Link href={'/home/login'} className="text-blue-600">
            Sign in.
          </Link>
        </div>
      </div>
    </div>
  )
}
