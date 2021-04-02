const db = require('.././data/db-config')

const findByPlantId = (id) => {
  return db('plant_images')
  .select('image_url')
  .where('user_plants_id', id)
}

const insertImage = async (url, plant) => {
  const id = await db('plant_images')
  .insert({image_url: url, user_plants_id: plant}, ['image_url'])
  return id
}

module.exports = {
  findByPlantId,
  insertImage
}