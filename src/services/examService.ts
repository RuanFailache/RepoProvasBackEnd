import { getRepository } from 'typeorm'

import Exam from '../entities/examEntity'
import Subject from '../entities/subjectEntity'
import Teacher from '../entities/teacherEntity'
import InvalidBodyError from '../errors/InvalidBodyError'

import { ExamBody } from '../interfaces/ExamRequest'

import examValidation from '../schemas/examValidation'

export const create = async (inputData: ExamBody) => {
  const { error } = examValidation.validate(inputData)

  if (error) {
    throw new InvalidBodyError('Invalid input data!')
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

export const listExamsByTeacher = async (id: string) => {
  const teacher = await getRepository(Teacher).findOneOrFail(id)

  const exams = await getRepository(Exam).find({
    where: {
      teacher,
    },
    relations: ['subject'],
  })

  return exams.map((exam) => exam.getExam())
}

export const listExamsBySubject = async (id: string) => {
  const subject = await getRepository(Subject).findOneOrFail(id)

  const exams = await getRepository(Exam).find({
    where: {
      subject,
    },
    relations: ['teacher'],
  })

  return exams.map((exam) => exam.getExam())
}
