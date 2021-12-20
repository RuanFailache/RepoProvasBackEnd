import '../../src/setup'

import supertest from 'supertest'
import { getConnection } from 'typeorm'

import app, { init } from '../../src/app'

describe('GET /subjects/teacher/:id', () => {
  const route = '/subjects'

  beforeAll(async () => {
    await init()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  test('Successuful operation', async () => {
    const result = await supertest(app).get(route)
    expect(result.status).toBe(200)
  })
})
