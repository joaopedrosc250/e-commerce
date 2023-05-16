'use client'

import Image from 'next/image'

export const Slider = () => {
  const images = [
    '/model-10.jpg',
    '/model-11.jpg',
    '/model-7.jpg',
    '/model-6.jpg',
  ]

  return (
    <div className="w-full">
      <div className="flex justify-center overflow-hidden lg:flex-row">
        <div className="flex items-center xs:p-4 lg:h-[35rem]">
          {images.slice(0, 4).map((image) => (
            <div
              className="h-full transition-all ease-in-out hover:scale-105 lg:hover:pl-2 lg:hover:pr-2"
              key={image}
            >
              <Image
                src={image}
                alt="image"
                width={1920}
                height={1080}
                className="h-full w-full cursor-pointer transition-all ease-in-out hover:rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
