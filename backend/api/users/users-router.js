const router = require('express').Router()
const Users = require('./users-model')
const Plants = require('../plants/plants-model')


router.get('/', async(req, res) => {
  const users = await Users.find()
  res.status(200).json(users)
})

router.get('/:id', async (req, res, next) => {
  try{
    const id = req.params.id
    const user = await Users.findById(id)
    res.status(200).json(user)
  }catch(err){
    next(err)
  }
})

router.put('/:id', (req, res) => {
  res.json({message: 'edit a specific user by id here'})
})

router.get('/:id/plants', async (req, res, next) => {
  const plants = await Plants.findById(req.params.id)
  res.status(200).json(plants)
})

router.get('/:id/plants/:plant_id', async (req, res, next) => {
  const plant = await Plants.findByPlantId(req.params.id, req.params.plant_id)
  res.status(200).json(plant)
})

module.exports = router
