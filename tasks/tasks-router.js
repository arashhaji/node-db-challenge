const express = require('express');
const router = express.Router();
const task_list = require('./tasks-model');

router.get('/', (req, res) => {
  task_list
    .findAll()
    .then(task_list => {
      task_list.map(tasks => {
        if (tasks.completed) {
          tasks.completed = true;
        } else {
          tasks.completed = false;
        }
      });
      return res.status(200).json(task_list);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Could not find that task!" });
    });
});

// router.post('/', (req, res) => {
//   task_list
//     .add(req.body)
//     .then(newTask => {
//       res.status(201).json(newTask);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: "Unidentified task...." });
//     });
// });
router.post('/', async (req, res, next) => {
    try {
        const id = await task_list.add(req.body)
        res.status(201).json(await task_list.findById(id))
    }
    catch(err) {
        next(err)
    }
})

module.exports = router;