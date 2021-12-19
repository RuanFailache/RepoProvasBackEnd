import { Router } from 'express'

import * as teacherController from '../controllers/teacherController'

const router = Router()

router.get('/subject/:id', teacherController.getTeachersBySubjectId)

export default router
