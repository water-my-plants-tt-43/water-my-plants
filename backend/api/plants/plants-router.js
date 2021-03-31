const router = require('express').Router()
const Plants = require('./plants-model')

router.get('/', async (req, res) => {
  const plants = await Plants.find()
  res.status(200).json(plants)
})

module.exports = router
