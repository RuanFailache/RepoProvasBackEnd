import { Request, Response, NextFunction } from 'express'
import { EntityNotFoundError } from 'typeorm'

import * as teacherService from '../services/teacherService'

export const getTeachersBySubjectId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id)

  try {
    const subjects = await teacherService.filterTeachersById(id)
    res.send(subjects)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }
    next(err)
  }
}
