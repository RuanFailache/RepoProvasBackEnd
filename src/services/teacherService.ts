import { getRepository } from 'typeorm'

import Subject from '../entities/subjectEntity'

export const filterTeachersById = async (id: number) => {
  const subject = await getRepository(Subject).findOneOrFail({
    where: {
      id,
    },
    relations: ['teachers'],
  })

  return subject.teachers
}
