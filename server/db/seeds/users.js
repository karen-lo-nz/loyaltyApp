
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Joe', phone:123, email:'joe@gmail.com'},
        {id: 2, name: 'Jack', phone:246, email:'jack@gmail.com'},
        {id: 3, name: 'Jim', phone:369, email:'jim@gmail.com'}
      ]);
    });
};
