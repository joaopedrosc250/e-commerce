"use client";

import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full text-black xs:h-auto xs:flex-col xs:items-center xs:justify-center xs:gap-6 lg:h-56 lg:flex-col lg:items-center lg:justify-around">
      <div className="grid w-full xs:grid-cols-1 xs:justify-items-center xs:gap-6 md:w-5/6 md:grid-cols-3 md:justify-items-center lg:w-3/4 lg:grid-cols-3 lg:justify-items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">UrbanAvenue</h1>
          <p>Streetwear shop online: style meets comfort.</p>
        </div>
        <div className="flex justify-center gap-4">
          <ul className="flex flex-row justify-center gap-2 xs:items-center lg:items-center">
            <li>
              <Link
                className="transition-all hover:underline hover:underline-offset-1"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:underline hover:underline-offset-1"
                href="/shop"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:underline hover:underline-offset-1"
                href="mailto: amaralrdev@gmail.com"
                target="_blank"
              >
                Mail
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <i className="font-bold">Social</i>
          <div className="flex flex-row items-center justify-center text-xl">
            <Link
              href="https://www.linkedin.com/in/lucas-amaral-73650a1b0/"
              target="_blank"
              title="linkedin profile"
              className="px-2 transition-all ease-in-out hover:underline "
              rel="noopener noreferrer"
            >
              <LinkedinLogo
                size={24}
                className="transition-all ease-in-out hover:scale-110"
              />
            </Link>
            <Link
              href="https://github.com/LrAmaral"
              target="_blank"
              title="github profile"
              className="px-2 transition-all ease-in-out hover:underline"
              rel="noopener noreferrer"
            >
              <GithubLogo
                size={24}
                className="transition-all ease-in-out hover:scale-110"
              />
            </Link>
            <Link
              href="https://www.instagram.com/amaraldev/"
              target="_blank"
              title="github profile"
              className="px-2 transition-all ease-in-out hover:underline"
              rel="noopener noreferrer"
            >
              <InstagramLogo
                size={24}
                className="transition-all ease-in-out hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <span>&#169; </span>All rights reserved to{" "}
        <Link
          href={"https://lramaral.vercel.app/"}
          className="hover:underline"
          target="_blank"
        >
          LrAmaral
        </Link>
      </div>
    </div>
  );
};
