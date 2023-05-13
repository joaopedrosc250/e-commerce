
import { ProductProps } from "@/@types/product";
import { prisma } from "@/app/services/prisma";

export const insertProduct = async () => {
  const data: ProductProps[] = [
    {
      title: "t-shirt-1",
      type: "tshirt",
      id: "1",
      url: "/shop/pageproduct/1",
      size: "G",
      image: "/t-shirt-4.jpg",
      price: 54.95,
      desc: "A comfortable and stylish t-shirt.",
      stock: 20,
    },
    {
      title: "t-shirt-2",
      id: "2",
      type: "tshirt",
      url: "/shop/pageproduct/2",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 60.95,
      desc: "A comfortable and stylish t-shirt.",
      stock: 15,
    },
    {
      title: "t-shirt-3",
      id: "3",
      type: "tshirt",
      url: "/shop/pageproduct/3",
      size: "M",
      image: "/t-shirt-3.jpg",
      price: 67.8,
      desc: "A comfortable and stylish t-shirt.",
      stock: 12,
    },
  ];

  const products = await prisma.products.createMany({
    data: data,
  });

  return products;
};
