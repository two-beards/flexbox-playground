const jwt = require('jsonwebtoken')
const httpie = require('httpie')
const secret = process.env.JWT_SECRET


module.exports = async (req, res) => {
  const token = await jwt.sign({ isAllowed: true }, secret)
  const headers = { 'x-mcbridem-auth-token': token }
  httpie
    .post('https://analytics.mcbrid.es/api/pageview', req.body, { headers })
    .then(response => {
      return res.json(response)
    })
    .catch(err => {
      return res.status(500).json({ error: err })
    })
}