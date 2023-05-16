import Link from "next/link";
import Image from "next/image";
import { ProductProps } from "@/@types/product";

export const Product = ({ url, id, image, title, price }: ProductProps) => {
  return (
    <div key={id} className="grid justify-items-center">
      <Link href={url} className="grid justify-items-center gap-2">
        <Image
          src={image}
          className="hover:scale-95 hover:rounded-none transition-all rounded-3xl w-full h-60 object-cover"
          alt="image"
          width={1920}
          height={1080}
        />
        <p className="text-lg font-bold">{title}</p>
      </Link>
      <p className="text-center">U$ {price}</p>
    </div>
  );
};
