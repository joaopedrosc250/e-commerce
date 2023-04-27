import { Request, Response } from "express"; // Importe os tipos corretos para as requisições e respostas

export function Request(Res: Response) {
  return new Response('Hello world!')
}
