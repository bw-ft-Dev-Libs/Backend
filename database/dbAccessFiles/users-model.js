const db = require('../dbConfig');

module.exports = {
  createUser,
  findBy
}

async function createUser(userObj) {

  const [id] = await db('users').insert(userObj)
  return findById(id);

}

function findBy(filter){
  return db('users').where(filter)
}

function findById(id) {
  return db('users')
    .select('username', "id")
    .where({ id })
    .first();
}