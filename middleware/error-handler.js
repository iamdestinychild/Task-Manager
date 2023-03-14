const { CustomError } = require('../errors/errors')

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({'msg': err.message})
    }
   return res.status(500).json({'msg': 'something went wrong pls try again'})
}

module.exports = errorHandler