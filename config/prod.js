module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  mlab: {
    uri: process.env.MONGO_URI,
    options: {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS
    }
  },
  cookieKey: process.env.COOKIE_KEY
};
