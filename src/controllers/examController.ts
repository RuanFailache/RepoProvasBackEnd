import { Response, NextFunction } from 'express'
import { EntityNotFoundError } from 'typeorm'

import * as ExamService from '../services/examService'

import ExamRequest from '../interfaces/ExamRequest'

export const postExam = async (
  req: ExamRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    await ExamService.create(req.body)
    return res.sendStatus(201)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }

    return next(err)
  }
}
