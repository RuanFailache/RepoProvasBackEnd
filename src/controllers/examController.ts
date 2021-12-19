import { Response, NextFunction } from 'express'
import { EntityNotFoundError } from 'typeorm'

import * as examService from '../services/examService'

import ExamRequest from '../interfaces/ExamRequest'

export const postExam = async (
  req: ExamRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    await examService.create(req.body)
    return res.sendStatus(201)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }
    return next(err)
  }
}

export const filterExamsByTeacher = async (
  req: ExamRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  try {
    const exams = await examService.listExamsByTeacher(id)
    return res.send(exams)
  } catch (err) {
    return next(err)
  }
}

export const filterExamsBySubject = async (
  req: ExamRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  try {
    const exams = await examService.listExamsBySubject(id)
    return res.send(exams)
  } catch (err) {
    return next(err)
  }
}
