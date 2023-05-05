import { CartProps } from "@/types/cart";
import Image from "next/image";

export default function Cart({ id, title, price, image }: CartProps) {
  return (
    <div
      key={id}
      className="flex flex-row items-center justify-center  gap-4 text-black"
    >
      <div>
        <Image src={image} width={220} height={20} alt="image"></Image>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p>U$ {price}</p>
      </div>
    </div>
  );
}
