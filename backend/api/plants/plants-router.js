const router = require('express').Router()
const Plants = require('./plants-model')


router.get('/', async (req, res) => {
  const plants = await Plants.find()
  res.status(200).json(plants)
})

router.post('/', (req, res) => {
  res.json({message: 'post a new plant here'})
})

router.get('/:id', (req, res) => {
  res.json({message: 'get a specific plant here'})
})

router.put('/:id', (req, res) => {
  res.json({message: 'edit a specific plant here'})
})

router.delete('/:id', (req, res) => {
  res.json({message: 'delete a specific plant here'})
})

module.exports = router
