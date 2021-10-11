export default {
  PORT: process.env.PORT,
  DB: {
    URI_DEV: process.env.DB_URL,
    URI_PROD: process.env.MONGO_URI,
  },
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  SECRET_SESSION: process.env.SECRET_SESSION,
};
