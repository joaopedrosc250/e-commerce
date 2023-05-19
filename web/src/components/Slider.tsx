import Image from 'next/image'

export const Slider = () => {
  const images = [
    '/model-10.jpg',
    '/model-6.jpg',
    '/model-7.jpg',
    '/model-11.jpg',
  ]

  return (
    <div className="w-full">
      <div className="flex justify-center overflow-hidden lg:flex-row">
        <div className="pointer-events-none relative flex items-center xs:p-4 lg:h-[35rem] ">
          {images.slice(0, 4).map((image) => (
            <div className="h-full" key={image}>
              <Image
                src={image}
                alt="image"
                width={1920}
                height={1080}
                className="h-full w-full"
              />
            </div>
          ))}
          <h1 className="absolute text-white xs:left-16 xs:top-24 xs:text-3xl lg:left-40 lg:top-1/2 lg:text-6xl">
            <span className="underline underline-offset-4">Discover</span> new
            trends
            <p className="xs:text-xl lg:text-4xl">Feels the vibe</p>
          </h1>
        </div>
      </div>
    </div>
  )
}
