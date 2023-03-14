const express = require('express')

const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/404-notfound')
const errorHandler = require('./middleware/error-handler');
require('dotenv').config()

const app = express();

// middleweare
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)

app.use(errorHandler)



const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()