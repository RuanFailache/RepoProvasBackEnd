import { Request } from 'express'

export interface ExamReqBody {
  name: string
  category: string
  teacherId: number
  subjectId: number
  link: string
}

export default interface ExamRequest extends Request {
  body: ExamReqBody
}
