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
  stripe: {
    public: process.env.STRIPE_PUB,
    private: process.env.STRIPE_PRIV
  },
  cookieKey: process.env.COOKIE_KEY
};
