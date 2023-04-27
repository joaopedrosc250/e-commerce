import { Request, Response } from "express"; // Importe os tipos corretos para as requisições e respostas

export async function GET(res: Response) {
  return new Response('Hello world!')
}
