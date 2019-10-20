const db = require('../dbConfig');

module.exports = {
  findById,
}

function findById(id) {
  return db('category')
    .where({ id })
    .first();
}