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

router.put('/:id', async (req, res, next) => {
  try{
    const userId = req.params.id
    const changes = req.body
    if(!changes.username || !changes.password || !changes.phone) {
      res.status(400).json({message: "this request must contain all required fields"})
    } else{
      const updatedUser = await Users.update(userId, changes)
      res.json(updatedUser)
    }
  }catch(err){
    next(err)
  }
})

//eslint-disable-next-line
router.get('/:id/plants', async (req, res, next) => {
  const plants = await Plants.findById(req.params.id)
  res.status(200).json(plants)
})

//eslint-disable-next-line
router.get('/:id/plants/:plant_id', async (req, res, next) => {
  const plant = await Plants.findByPlantId(req.params.id, req.params.plant_id)
  res.status(200).json(plant)
})

router.post('/:id/plants', async (req, res, next) => {
  try{
    const newPlant = await Plants.create(req.params.id, req.body)
    res.status(200).json(newPlant)
  } catch(err){
    next(err)
  }
})

router.delete('/:id/plants/:plant_id', async (req, res, next) => {
  const userId = req.params.id
  const userPlantId = req.params.plant_id
  try{
    const plantToDelete = await Plants.findByPlantId(userId, userPlantId)
    const idToDelete = plantToDelete[0].user_plants_id
    const deleted = await Plants.remove(idToDelete)
    res.json(deleted)
  }catch(err){
    next(err)
  }
})

router.put('/:id/plants/:plant_id', async (req, res, next) => {
  
  try{
    const userId = req.params.id
    const userPlantId = req.params.plant_id
    const changes = req.body
    if(!changes.nickname || !changes.species) {
      res.status(400).json({message: "this request must contain all required fields"})
    } else{
      const updatedPlant = await Plants.updatePlant(userPlantId, changes, userId)
      res.json(updatedPlant)
    }
  }catch(err){
    next(err)
  }
})

module.exports = router
