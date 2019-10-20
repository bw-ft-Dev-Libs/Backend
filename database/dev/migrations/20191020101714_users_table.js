
exports.up = function(knex) {
  return knex.schema.createTable('users', Users => {
    Users.increments()
    
    Users.string('username', 255)
      .notNullable()
      .unique()
    Users.string('password', 255)
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};