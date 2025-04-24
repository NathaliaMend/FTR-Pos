import { afterAll, beforeAll, it, describe, expect, beforeEach } from 'vitest'

import request from 'supertest'
import { app } from '../src/app'
import { execSync } from 'child_process'

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
  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
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
  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
    const cookies = createTransactionResponse.get('Set-Cookie')

    if (!cookies) {
      throw new Error('No cookies found in the response')
    }

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)
    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New transaction',
        amount: 5000,
      }),
    ])
    console.log(listTransactionsResponse.body)
  })
})
