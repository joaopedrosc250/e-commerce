import Link from "next/link";
import Image from "next/image";

interface InputProps {
  url: string;
  id: string;
  image: string;
  title: string;
  price: number;
}

export const Product = ({ url, id, image, title, price }: InputProps) => {
  return (
    <div key={id} className="grid justify-items-center">
      <Link href={url} className="grid justify-items-center gap-2">
        <Image
          src={image}
          className="hover:scale-95 transition-all rounded-3xl w-full h-60 object-cover"
          alt="image"
          width={1920}
          height={1080}
        />
        <p className="text-lg">{title}</p>
      </Link>
      <p className="">{price}</p>
    </div>
  );
};
