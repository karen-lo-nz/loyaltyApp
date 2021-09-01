
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops').insert([
        {id: 1, name: 'KFC', address:'Brooklyn', email:'kfc@gmail.com'},
        {id: 2, name: 'TJ Katsu', address:'Newtown', email:'tj@gmail.com'},
        {id: 3, name: 'Fidels', address:'Aro Valley', email:'fidels@gmail.com'}
      ]);
    });
};
