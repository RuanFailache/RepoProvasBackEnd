import { getRepository } from 'typeorm'

import Subject from '../entities/subjectEntity'

export const listAll = async () => {
  const subjects = await getRepository(Subject).find()
  return subjects
}
