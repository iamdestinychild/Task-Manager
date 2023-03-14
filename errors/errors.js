class CustomError extends Error{
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
    
}

const createCustomError = (msg, stats) => {
    return new CustomError(msg, stats)
}

module.exports = {CustomError, createCustomError}