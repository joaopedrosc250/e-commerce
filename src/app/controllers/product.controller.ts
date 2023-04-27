export const getAllProduct = async () => {
  const products = await prisma.product.findMany({});
  return products;
};

export const getProduct = async (id: any) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
};

export const createProduct = async (
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

export const updateProduct = async (id: any, updateData: any) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: { ...updateData },
  });
  return product;
};

export const deleteProduct = async (id: any) => {
  const product = await prisma.product.delete({ where: { id } });
  return product;
};
