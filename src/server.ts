import crypto from 'node:crypto'

import fastify from 'fastify'

import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  // const transaction = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Test transaction',
  //     amount: 1000,
  //   })
  //   .returning('*')

  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
