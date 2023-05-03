"use client";

import Image from "next/image";

export const Slider = () => {
  const images = [
    "/model-10.jpg",
    "/model-11.jpg",
    "/model-7.jpg",
    "/model-6.jpg",
  ];

  return (
    <div className="w-full">
      <div className="flex lg:flex-row justify-center overflow-hidden">
        <div className="flex xs:p-4 items-center lg:h-[35rem]">
          {images.slice(0, 4).map((image) => (
            <div
              className="h-full hover:scale-105 lg:hover:pl-2 lg:hover:pr-2 transition-all ease-in-out"
              key={image}
            >
              <Image
                src={image}
                alt="image"
                width={1920}
                height={1080}
                className="w-full cursor-pointer h-full hover:rounded-3xl transition-all ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
