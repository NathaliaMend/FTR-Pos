// INSERINDO
/* app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transaction
})
*/
import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT || 4000,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
