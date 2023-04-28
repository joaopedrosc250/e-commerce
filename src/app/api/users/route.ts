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

import { Request, Response } from "express";

export default async function handler (req: Request, res: Response) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const user = await getUser(req.query.id);
          return res.status(200).json(user);
        } else {
          const users = await getAllUser();
          return res.status(200).json(users);
        }
      }
      case "POST": {
        const { name, email } = req.body;
        const user = await createUser(name, email);
        return res.status(200).json(user);
      }
      case "PUT": {
        const { id, ...updateData } = req.body;
        const user = await updateUser(id, updateData);
        return user.status(200).json(user);
      }
      case "DELETE": {
        const { id } = req.body;
        const user = await deleteUser(id);
        return res.status(200).json(user);
      }
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
