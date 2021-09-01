exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('stamps').del()
    .then(function () {
      // Inserts seed entries
      return knex('stamps').insert([
        { id: 1, user_id: 1, shop_id: 1, created_at: '01092021' },
        { id: 2, user_id: 1, shop_id: 1, created_at: '01102021' },
        { id: 3, user_id: 1, shop_id: 1, created_at: '01102021' },
        { id: 4, user_id: 2, shop_id: 1, created_at: '01092021' },
        { id: 5, user_id: 2, shop_id: 2, created_at: '08102021' },
        { id: 6, user_id: 2, shop_id: 2, created_at: '19112021' },
        { id: 7, user_id: 3, shop_id: 3, created_at: '01092021' },
        { id: 8, user_id: 3, shop_id: 3, created_at: '01102021' },
        { id: 9, user_id: 3, shop_id: 2, created_at: '01112021' }
      ])
    })
}
