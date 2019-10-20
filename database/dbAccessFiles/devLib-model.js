const db = require('../dbConfig');

module.exports = {
  insertLib,
  findById,
}

async function insertLib(libObj){
  const [id] = await db('devLib').insert(libObj)
  return findById(id)
}

function findById(id) {
  return db('devLib')
    .where({ id })
    .first();
}