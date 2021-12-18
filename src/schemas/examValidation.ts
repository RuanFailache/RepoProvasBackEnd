import Joi from 'joi'

const examValidation = Joi.object({
  name: Joi.string().min(3).required(),
  category: Joi.string()
    .pattern(/^(P1|P2|P3|2ch|Outras)$/)
    .required(),
  teacherId: Joi.number().required(),
  subjectId: Joi.number().required(),
  link: Joi.string().required(),
})

export default examValidation
