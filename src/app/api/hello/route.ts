import { Request, Response } from "express"; // Importe os tipos corretos para as requisições e respostas
import mysql from "mysql2/promise";

export async function GET(req: Request, res: Response) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "products",
    user: "root",
    password: "password",
  });

  try {
    const query = "SELECT id, title, image FROM products"; // Corrigido para usar o nome correto da tabela e selecionar as colunas corretas
    const [data] = await dbconnection.execute(query); // Corrigido para usar o nome correto da variável
    dbconnection.end();

    res.status(200).json({ results: data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
