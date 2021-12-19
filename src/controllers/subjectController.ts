import { Request, Response } from 'express'
import { EntityNotFoundError } from 'typeorm'

import * as subjectService from '../services/subjectService'

export const getSubjectsByTeacherId = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const subjects = await subjectService.filterSubjectsById(id)
    return res.send(subjects)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }
    return res.sendStatus(500)
  }
}
