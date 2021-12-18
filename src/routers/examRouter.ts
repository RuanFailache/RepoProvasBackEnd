import { Router } from 'express'

import * as ExamController from '../controllers/examController'

const router = Router()

router.post('/', ExamController.postExam)

export default router
