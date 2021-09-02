exports.up = function (knex) {
  return knex.schema.createTable('stamps', table => {
    table.increments('id')
    table.timestamp('created_at')
    table.integer('user_id')
    table.integer('shop_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stamps')
}
