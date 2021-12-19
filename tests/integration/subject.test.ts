import '../../src/setup'

import supertest from 'supertest'
import { getConnection } from 'typeorm'

import app, { init } from '../../src/app'

describe('GET /subjects/teacher/:id', () => {
  const route = (id: number) => `/subjects/teacher/${id}`

  beforeAll(async () => {
    await init()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  test('Not found subject', async () => {
    const result = await supertest(app).get(route(10))
    expect(result.status).toBe(404)
  })

  test('Successuful operation', async () => {
    const result = await supertest(app).get(route(1))
    expect(result.status).toBe(200)
  })
})
