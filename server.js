const express = require('express');

const server = express();

// const ProjectRouter = require('./projects/projects-router');
// const ResourcesRouter = require('./resources/resources-router');
// const TasksRouter = require('./tasks/tasks-router');

server.use(express.json());

// server.use("/projects", ProjectRouter);
// server.use("/resources", ResourcesRouter);
// server.use("/tasks", TasksRouter);

server.get('/', (req, res) => {
    res.send('<h1> Its Nice, I like, How Much <h1>')
})

module.exports = server;