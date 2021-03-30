const router = require('express').Router()
const Users = require('./users-model')


router.get('/', async(req, res) => {
  const users = await Users.find()
  res.status(200).json(users)
})

router.post('/', (req, res) => {
  res.json({message: 'post a new user here'})
})

router.get('/:id', (req, res) => {
  res.json({message: 'get a specific user by id here'})
})

router.put('/:id', (req, res) => {
  res.json({message: 'edit a specific user by id here'})
})

module.exports = router
