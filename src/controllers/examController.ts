import { Response } from 'express'
import { EntityNotFoundError } from 'typeorm'

import * as examService from '../services/examService'

import ExamRequest from '../interfaces/ExamRequest'

import InvalidBodyError from '../errors/InvalidBodyError'

export const postExam = async (req: ExamRequest, res: Response) => {
  try {
    await examService.create(req.body)
    return res.sendStatus(201)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }
    if (err instanceof InvalidBodyError) {
      const { status, message } = err
      return res.status(status).send(message)
    }
    return res.sendStatus(500)
  }
}

export const filterExamsByTeacher = async (req: ExamRequest, res: Response) => {
  const { id } = req.params

  try {
    const exams = await examService.listExamsByTeacher(id)
    return res.send(exams)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }
    return res.sendStatus(500)
  }
}

export const filterExamsBySubject = async (req: ExamRequest, res: Response) => {
  const { id } = req.params

  try {
    const exams = await examService.listExamsBySubject(id)
    return res.send(exams)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }
    return res.sendStatus(500)
  }
}
