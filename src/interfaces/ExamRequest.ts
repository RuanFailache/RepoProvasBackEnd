import { Request } from 'express'

export interface ExamBody {
  name: string
  category: string
  teacherId: number
  subjectId: number
  link: string
}

export default interface ExamRequest extends Request {
  body: ExamBody
}
