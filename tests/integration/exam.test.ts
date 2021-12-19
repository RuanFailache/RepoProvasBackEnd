import '../../src/setup'

import supertest from 'supertest'
import faker from 'faker'
import { getConnection } from 'typeorm'

import app, { init } from '../../src/app'
import { ExamBody } from '../../src/interfaces/ExamRequest'

describe('POST /exams', () => {
  const route = '/exams'

  const body: ExamBody = {
    name: '1500.1',
    category: 'P1',
    teacherId: 1,
    subjectId: 1,
    link: faker.image.imageUrl(),
  }

  beforeAll(async () => {
    await init()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  test('Invalid body', async () => {
    const result = await supertest(app)
      .post(route)
      .send({ ...body, name: '' })

    expect(result.status).toBe(400)
  })

  test('Invalid teacher', async () => {
    const result = await supertest(app)
      .post(route)
      .send({ ...body, teacherId: 0 })

    expect(result.status).toBe(404)
  })

  test('Invalid subject', async () => {
    const result = await supertest(app)
      .post(route)
      .send({ ...body, subjectId: 0 })

    expect(result.status).toBe(404)
  })

  test('Successuful operation', async () => {
    const result = await supertest(app).post(route).send(body)
    expect(result.status).toBe(201)
  })
})

describe('GET /exams/teacher/:id', () => {
  const route = (id: number) => `/exams/teacher/${id}`

  beforeAll(async () => {
    await init()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  test('Invalid Id', async () => {
    const result = await supertest(app).get(route(0))
    expect(result.status).toBe(404)
  })

  test('Successuful operation', async () => {
    const result = await supertest(app).get(route(1))
    expect(result.status).toBe(200)
  })
})

describe('GET /exams/subject/:id', () => {
  const route = (id: number) => `/exams/subject/${id}`

  beforeAll(async () => {
    await init()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  test('Invalid Id', async () => {
    const result = await supertest(app).get(route(0))
    expect(result.status).toBe(404)
  })

  test('Successuful operation', async () => {
    const result = await supertest(app).get(route(1))
    expect(result.status).toBe(200)
  })
})
