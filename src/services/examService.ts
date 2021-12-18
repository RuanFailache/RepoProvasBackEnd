import { getRepository } from 'typeorm'

import Exam from '../entities/examEntity'
import Subject from '../entities/subjectEntity'
import Teacher from '../entities/teacherEntity'

import { ExamReqBody } from '../interfaces/ExamRequest'

import examValidation from '../schemas/examValidation'

export const create = async (inputData: ExamReqBody) => {
  const { error } = examValidation.validate(inputData)

  if (error) {
    throw new Error('Bad Request')
  }

  const { subjectId, teacherId } = inputData

  const subject = await getRepository(Subject).findOneOrFail(subjectId)
  const teacher = await getRepository(Teacher).findOneOrFail(teacherId)

  const exam = getRepository(Exam).create({
    ...inputData,
    subject,
    teacher,
  })
  const result = await getRepository(Exam).save(exam)

  return result.getExam()
}
