import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  // fazer a chamada http para criar uma nova transação (operação)
  const responseStatusCode = 201
  // validação
  expect(responseStatusCode).toEqual(201)
})
