const db = require('.././data/db-config')

const find = () => {
  return db('users')
  .select('user_id', 'username', 'phone')
}

module.exports = {
  find
}