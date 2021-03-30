const db = require('.././data/db-config')

const find = () => {
  return db('users')
  .select('user_id', 'username', 'phone')
}
const findBy = (filter) => {
  return db('users')
  .select('user_id', 'username', 'password')
  .where('username', filter)
}

function findById(id) {
  return db('users')
  .select('user_id', 'username', 'password')
  .where('user_id', id).first()
}

async function add(user){
  console.log('hello')
  const id = await db('users').insert(user, 'user_id')
  console.log(id)
  return findById(id[0])
}

module.exports = {
  find,
  findBy,
  findById,
  add
}