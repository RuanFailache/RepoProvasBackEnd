import dotenv from 'dotenv'

const pathFile = process.env.NODE_ENV === 'production' ? '.env' : '.local.env'

dotenv.config({
  path: pathFile,
})
