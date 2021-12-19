import { Router } from 'express'

import * as subjectController from '../controllers/subjectController'

const router = Router()

router.get('/teacher/:id', subjectController.getSubjectsByTeacherId)

export default router
