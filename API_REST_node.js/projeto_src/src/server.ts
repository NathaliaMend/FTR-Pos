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

const host = 'RENDER' in process.env ? `0.0.0.0` : `localhost`
app
  .listen({
    port: env.PORT,
    host,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
