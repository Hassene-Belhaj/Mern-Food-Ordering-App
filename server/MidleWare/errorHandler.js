class CustomApiError extends Error {
    constructor (message,statusCode) {
        super(message) 
        this.statusCode = statusCode
    }
}



const createCustomError = (message , statusCode) => {
    return new CustomApiError(message , statusCode)
}



const errorHandling = (err , req ,res , next) => {
    if(err instanceof CustomApiError) {
        return res.status(err.statusCode).json({success : false , msg : err.message})
    } else {
        return res.status(500).json({msg : 'something went wrong ! please try again later ...' , error : err.stack})
    }
} 




module.exports = {
    createCustomError , errorHandling
};
