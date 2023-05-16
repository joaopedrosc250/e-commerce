const { prisma } = require("../services/prisma")

exports.createProduct = async (data: any) => {
    const product = await prisma.Products.create({
        data,
    })
    return product;
}