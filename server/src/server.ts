import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
  
const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.users.findMany()

  return users
})

// Porta para o localhost, em ambiente de desenvolvimento

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Assim que meu servidor estiver no ar, eu quero então executar uma função
    console.log('🛒 HTTP server running on http://localhost:3333')
  })
