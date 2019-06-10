module.exports = () => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(403).send({ error: 'Not Logged In' })
    }

    return next()
  }
}
