import { getRepository } from 'typeorm'

import Teacher from '../entities/teacherEntity'

export const filterTeachersById = async (id: number) => {
  const teacher = await getRepository(Teacher).find({
    where: {
      id,
    },
    relations: ['subjects'],
  })

  return teacher[0].subjects
}
