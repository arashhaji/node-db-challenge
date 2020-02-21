exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Yard',
          project_description: 'mulching front and side of house',
          completed: false
        },
        {
          id: 2,
          project_name: 'House',
          project_description: 'Painting bathrooms',
          completed: false
        },
        {
          id: 3,
          project_name: 'Deck',
          project_description: 'Stain Deck',
          completed: false
        }
      ]);
    });
};
