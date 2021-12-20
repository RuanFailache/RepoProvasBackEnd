import { Request, Response } from 'express'
import { EntityNotFoundError } from 'typeorm'

import * as subjectService from '../services/subjectService'

export const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await subjectService.listAll()
    return res.send(subjects)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return res.sendStatus(404)
    }
    return res.sendStatus(500)
  }
}
