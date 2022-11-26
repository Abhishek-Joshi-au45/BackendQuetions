const parentsModel = require('../models/parents')
const jwt = require('jsonwebtoken')


const loginController = async (req, res) => {
  const { name, phoneNumber } = req.body

  try {
    const parent = await parentsModel.findOne({name,phoneNumber })

    if (!parent) {
      res.status(401).send({ status: 'error', msg: 'parent Not Found' })
    }
    //user is verfied

    const parentPayload = { name }

    //token creation payload, secret key, optional - algo, expirationTime
    const token = jwt.sign(parentPayload, process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
    res.cookie('jwt', token, { maxAge: 900000 })
    res.send({ status: 'success' })

  } catch (err) {
    res.status(401).send({ status: 'error', msg: err })
  }
}

const logoutController = (req, res) => {
  res.cookie('jwt', '', { maxAge: 3000 })
  res.send({ status: 'success', msg: 'Logged out successfully' })
}

module.exports = {
  loginController,
  logoutController
}