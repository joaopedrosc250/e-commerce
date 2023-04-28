const getAllUser = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

const getUser = async (id: any) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

const createUser = async (name: string, email: string) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return user;
};

const updateUser = async (id: any, updateData: any) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: { ...updateData },
  });
  return user;
};

const deleteUser = async (id: any) => {
  const user = await prisma.user.delete({ where: { id } });
  return user;
};
