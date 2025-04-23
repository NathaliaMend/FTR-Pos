import { afterAll, beforeAll, it, describe } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

/* test('o usuário consegue criar uma nova transação', () => {
  // fazer a chamada http para criar uma nova transação (operação)
  const responseStatusCode = 201
  // validação
  expect(responseStatusCode).toEqual(201)
})
*/

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    // const response =
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
    // ou expect(response.statusCode).toEqual(201)
  })
})
