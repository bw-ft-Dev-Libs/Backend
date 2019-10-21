
exports.up = function(knex) {
  return knex.schema.createTable('category', tbl => {
    tbl.increments()
    tbl.string('categoryName', 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('category')
};

