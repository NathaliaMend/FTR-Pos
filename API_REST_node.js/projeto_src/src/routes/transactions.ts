import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

// Request body : dados geralmente preenchido atraves de um formulario
export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    // {title, amount, type: credit ou debit} . Validando :

    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )
    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })
    // http codes - 201 -> sucess
    return reply.status(201).send()
  })
}
