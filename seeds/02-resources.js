exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: 'Internet' },
        { id: 2, resource_name: 'Painting' },
        { id: 3, resource_name: 'Color' },
        { id: 4, resource_name: 'Supplies' },
        { id: 5, resource_name: 'Tools' },
        { id: 6, resource_name: 'Gloves' }
      ]);
    });
};
