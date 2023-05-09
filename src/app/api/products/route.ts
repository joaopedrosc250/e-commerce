import { NextResponse } from "next/server";
import { getAllProducts, insertProduct } from "../../../../prisma/products";

export async function GET(request: Request) {
  const products = await getAllProducts();
  return NextResponse.json(products);
}

export async function POST(req: Request){
    const products = await insertProduct();
    return NextResponse.json(products);
}