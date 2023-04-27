import { Request, Response } from "express"
const { createProduct } = require("../repo/products.repo")

exports.create = async (req: Request, res: Response) => {
     try{
        const product = await createProduct(req.body)
        res.status(200).send(product)
     } catch (e) {
        res.status(400).send(e)
     }
}