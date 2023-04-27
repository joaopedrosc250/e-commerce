import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "@/app/controllers/product.controller";

import { Request, Response } from "express";

export default async function GET(req: Request, res: Response) {
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
        return product.status(200).json(product);
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
