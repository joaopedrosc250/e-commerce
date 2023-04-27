import { Request, Response } from "express"; // Importe os tipos corretos para as requisições e respostas

export async function Request(res: Response) {
  return new Response('Hello world!')
}
