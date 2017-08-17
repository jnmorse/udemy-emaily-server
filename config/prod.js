module.exports = {
  google: {
    ClientID: process.env.GOOGLE_CLIENT_ID,
    ClientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  mongo: {
    uri: process.env.MONGO_URI,
    options: {
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASS
    }
  },
  cookieKey: process.env.COOKIE_KEY
};
