import { Request, Response, NextFunction } from 'express'

import * as subjectService from '../services/subjectService'

export const getSubjectsByTeacherId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id)

  try {
    const subjects = await subjectService.filterTeachersById(id)
    res.send(subjects)
  } catch (err) {
    next(err)
  }
}
