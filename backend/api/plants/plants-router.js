const router = require('express').Router()
const Plants = require('./plants-model')
const {restricted} = require('../auth/auth-middleware')

router.get('/', restricted, async (req, res) => {
  const plants = await Plants.find()
  res.status(200).json(plants)
})

module.exports = router
