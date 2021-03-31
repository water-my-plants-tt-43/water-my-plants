const db = require('.././data/db-config')

const find = () => {
  return db('user_plants as up')
  .join('users as u', 'u.user_id', 'up.user_id')
  .join('plants as p', 'p.plant_id', 'up.plant_id')
  .select('up.user_plants_id', 'u.username as user', 'p.species', 'up.nickname', 'up.water_frequency', 'up.last_water')
}

const findById = (user_id) => {
  return db('user_plants as up')
  .join('users as u', 'u.user_id', 'up.user_id')
  .join('plants as p', 'p.plant_id', 'up.plant_id')
  .select('up.user_plants_id', 'u.username as user', 'p.species', 'up.nickname', 'up.water_frequency', 'up.last_water')
  .where('up.user_id', user_id)
}
const findByPlantId = (user_id, plant_id) => {
  return findById(user_id)
  .where('up.user_plants_id', plant_id)
}

module.exports = {
  find,
  findById,
  findByPlantId
}