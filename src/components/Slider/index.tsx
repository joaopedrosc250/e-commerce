import Image from "next/image";

export const Slider = () => {
  const images = [
    "/model-5.jpg",
    "/model-8.jpg",
    "/model-7.jpg",
    "/model-3.jpg",
  ];

  return (
    <div className="w-full">
      <div className="flex lg:flex-row justify-center overflow-hidden">
        <div className="flex xs:p-4 items-center lg:h-[38rem]">
          {images.map((image) => (
            <div className="h-full hover:scale-105 hover:pl-2 hover:pr-2 transition-all" key={image}>
              <Image
                src={image}
                alt="image"
                width={1920}
                height={1080}
                className="w-full cursor-pointer h-full hover:rounded-3xl transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
