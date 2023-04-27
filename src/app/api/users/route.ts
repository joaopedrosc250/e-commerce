import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "@/app/controllers/user.controller";

import { Request, Response } from "express";

export default async function GET(req: Request, res: Response) {
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
