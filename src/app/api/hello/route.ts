import { Response } from "express";

export function handleRequest(res: Response) {
  return res.send('Hello world!');
}
