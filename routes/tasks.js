const express = require('express')

const router = express.Router();

const {getALlTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getALlTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;