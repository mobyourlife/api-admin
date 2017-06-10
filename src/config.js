const connectionString = process.env.MOB_MONGODB_URL || 'mongodb://localhost:27017/mobyourlife'
const jwtSecret = process.env.MOB_JWT_SECRET || 'developmentsecret'

export default {
  connectionString,
  jwtSecret,
}
