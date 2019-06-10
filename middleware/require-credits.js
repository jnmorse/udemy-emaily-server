module.exports = () => {
  return (req, res, next) => {
    if (req.user < 1) {
      return res.status(403).send({
        error: 'Not Enough Credits!'
      })
    }

    return next()
  }
}
