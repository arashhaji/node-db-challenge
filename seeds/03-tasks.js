exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          task_description: 'Mulching Front and side of yard',
          completed: false
        },
        {
          id: 2,
          project_id: 1,
          task_description: 'Searching Internet for colors',
          completed: false
        },
        {
          id: 3,
          project_id: 1,
          task_description: 'Yard Work',
          completed: false
        },
        {
          id: 4,
          project_id: 2,
          task_description: 'Prep Bathroom',
          completed: false
        },
        {
          id: 6,
          project_id: 3,
          task_description: 'Paint',
          completed: false
        },
        {
          id: 5,
          project_id: 3,
          task_description: 'Prep Deck',
          completed: false
        },
        {
          id: 7,
          project_id: 3,
          task_description: 'Stain Deck',
          completed: false
        },
      ]);
    });
};
