import dotenv from 'dotenv'

const pathFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.local'

dotenv.config({
  path: pathFile,
})
