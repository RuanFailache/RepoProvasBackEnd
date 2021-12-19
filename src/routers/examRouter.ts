import { Router } from 'express'

import * as ExamController from '../controllers/examController'

const router = Router()

router.post('/', ExamController.postExam)
router.get('/teacher/:id', ExamController.filterExamsByTeacher)
router.get('/subject/:id', ExamController.filterExamsBySubject)

export default router
