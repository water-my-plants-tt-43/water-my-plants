exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username').unique().notNullable()
      users.string('password').notNullable()
      users.string('phone').unique()
      users.timestamps(false, true)
    })
    .createTable('plants', (plants) => {
      plants.increments('plant_id')
      plants.string('species').unique().notNullable()
    })
    .createTable('user_plants', (user_plants) => {
      user_plants.increments('user_plants_id')
      user_plants.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
      user_plants.integer('plant_id')
      .unsigned()
      .notNullable()
      .references('plant_id')
      .inTable('plants')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      user_plants.string('nickname')
      user_plants.integer('water_frequency')
      user_plants.dateTime('last_water')
    })
    .createTable('plant_images', (plant_images) => {
      plant_images.increments('plant_image')
      plant_images.text('image_url').notNullable()
      plant_images.integer('user_plants_id')
      .unsigned()
      .notNullable()
      .references('user_plants_id')
      .inTable('user_plants')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('plant_images')
  .dropTableIfExists('user_plants')
  .dropTableIfExists('plants')
  .dropTableIfExists('users')
}
