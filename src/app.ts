import express from 'express'
import cors from 'cors'
import 'reflect-metadata'

import connectDatabase from './database'

import ExamRouter from './routers/examRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/exams', ExamRouter)

export async function init() {
  await connectDatabase()
}

export default app
