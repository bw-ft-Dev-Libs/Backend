const db = require('../dbConfig');

module.exports = {
  insertLib,
  find,
  findById,
  updateLib,
  deletLib

}

async function insertLib(libObj){
  const [id] = await db('devLib').insert(libObj, "id")
  return findById(id)
}

function find(){
  return db('devLib')
}

function findById(id) {
  return db('devLib')
    .where({ id })
    .first();
}

async function deletLib(libObj){
   return db('devLib')
  .del()
  .where({id: libObj.id})
}

async function updateLib(libObj){
  await db('devLib')
  .update({lib: libObj.lib})
  .where({id: libObj.id})

  return findById(libObj.id)
}