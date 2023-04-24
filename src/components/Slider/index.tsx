import Image from "next/image";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

const images = ["/model-5.jpg", "/model-2.jpg", "/model-7.jpg", "/model-3.jpg"];

export const Slider = () => {
  return (
    <div className="w-full">
      <div className="flex lg:flex-row justify-center overflow-hidden">
          <div className="flex xs:p-4 items-center lg:h-[38rem]">
            {images.map((image) => (
              <div
                className="h-full hover:scale-105 transition-all"
                key={image}
              >
                <img
                  src={image}
                  alt="image"
                  className="w-full cursor-pointer h-full"
                />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
