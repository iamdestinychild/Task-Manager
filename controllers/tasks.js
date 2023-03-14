const Task = require('../module/tasks')
const asyncWrapper = require('../middleware/async-wrapper')
const { CustomError, createCustomError } = require('../errors/errors');


const getALlTasks = asyncWrapper(
    async (req, res) => {
            const tasks = await Task.find({})
            res.status(200).json({tasks})
    }
)

const createTask = asyncWrapper(
    async (req, res) => {
        const tasks = await Task.create(req.body)
        res.status(200).json({ tasks })
    }
)

const getTask = asyncWrapper(
    async (req, res) => {
        const id = req.params.id
        const task = await Task.findById(id)
        if (!task) {
            return next(createCustomError(`No Task With id : ${id}`,404))
            // return res.status(404).json({ msg: `` })
        }
    
        res.status(200).json({ task })
    
    }
)
    

const updateTask = asyncWrapper(
    async (req, res) => {
        const id = req.params.id
        const task = await Task.findByIdAndUpdate(id, req.body, {
            new:true,
            runValidators: true
        })
        if (!task) {
            return next(createCustomError(`No Task With id : ${id}`, 404))
            // return res.status(404).json({ msg:`` })
        }
        res.status(200).json({ task })
    
    }
)
    

const deleteTask = asyncWrapper(

    async (req, res) => {
    
        const id = req.params.id
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return next(createCustomError(`No Task With id : ${id}`, 404))
        }
        res.status(200).json({
            msg:`Task ${id} deleted`
        })
    } 
)
    


module.exports = {
    getALlTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}