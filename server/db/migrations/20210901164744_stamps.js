exports.up = function (knex) {
  return knex.schema.createTable('stamps', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('shop_id')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stamps')
}
