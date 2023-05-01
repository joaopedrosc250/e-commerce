import { Request, Response } from "express";

const getAllProduct = async () => {
  const products = await prisma.product.findMany({});
  return products;
};

const getProduct = async (id: any) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
};

const createProduct = async (
  type: string,
  title: string,
  url: string,
  size: string,
  image: string,
  price: number,
  desc: string
) => {
  const product = await prisma.product.create({
    data: {
      type,
      title,
      url,
      size,
      image,
      price,
      desc,
    },
  });
  return product;
};

const updateProduct = async (id: any, updateData: any) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: { ...updateData },
  });
  return product;
};

const deleteProduct = async (id: any) => {
  const product = await prisma.product.delete({ where: { id } });
  return product;
};

export default async function handler(req: Request, res: Response) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const product = await getProduct(req.query.id);
          return res.status(200).json(product);
        } else {
          const products = await getAllProduct();
          return res.status(200).json(products);
        }
      }
      case "POST": {
        const { type, title, url, size, image, price, desc } = req.body;
        const product = await createProduct(
          type,
          title,
          url,
          size,
          image,
          price,
          desc
        );
        return res.status(200).json(product);
      }
      case "PUT": {
        const { id, ...updateData } = req.body;
        const product = await updateProduct(id, updateData);
        return res.status(200).json(product);
      }
      case "DELETE": {
        const { id } = req.body;
        const product = await deleteProduct(id);
        return res.status(200).json(product);
      }
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
