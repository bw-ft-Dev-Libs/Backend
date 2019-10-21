
exports.up = function(knex) {
  return knex.schema.createTable('devLib', tbl => {
    tbl.increments()
    tbl.text('lib')
      .notNullable()
    tbl.integer('user_id', 255)
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
    tbl.integer('category_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('category')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('devLib');
};