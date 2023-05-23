import Image from 'next/image'

export const Slider = () => {
  const images = [
    '/model-12.jpg',
    '/model-13.jpg',
    '/model-6.jpg',
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

          <div className="xs:text-md absolute text-white xs:left-12 xs:top-28 lg:left-28 lg:top-[37vh] lg:text-6xl">
            <span className="underline decoration-blue-500 underline-offset-4">
              Flawless
            </span>{' '}
            new trends
            <p className="xs:text-sm lg:text-3xl">Feels the vibe</p>
          </div>
          <div className="absolute text-white xs:right-5 xs:top-4 xs:text-sm lg:right-12 lg:top-[4vh] lg:text-4xl">
            <span className="underline decoration-blue-500 underline-offset-4">
              Experience
            </span>{' '}
            more
            <p className="xs:text-md lg:text-lg">Live the better</p>
          </div>
        </div>
      </div>
    </div>
  )
}
