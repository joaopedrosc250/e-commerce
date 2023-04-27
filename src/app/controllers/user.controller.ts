export const getAllUser = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getUser = async (id: any) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

export const createUser = async (name: string, email: string) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return user;
};

export const updateUser = async (id: any, updateData: any) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: { ...updateData },
  });
  return user;
};

export const deleteUser = async (id: any) => {
  const user = await prisma.user.delete({ where: { id } });
  return user;
};
