exports.up = function (knex) {
  return knex.schema.createTable('shops', table => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('shops')
}
