import { getRepository } from 'typeorm'

import Subject from '../entities/subjectEntity'

export const filterTeachersById = async (id: number) => {
  const subject = await getRepository(Subject).find({
    where: {
      id,
    },
    relations: ['teachers'],
  })

  return subject[0].teachers
}
