const jwt = require('jsonwebtoken');
const { createCustomError } = require('../MidleWare/errorHandler');
const { AsyncWrapper } = require('../MidleWare/AsyncWrapper');

const verfiytoken = (req,res,next) => {
    // const token = req.cookies.access_token ;
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1] ;
    console.log(token);
    if(!token) {
        return next(createCustomError(  'you are not authenticated' , 401))
    }
    jwt.verify(token , process.env.SECRETJWT , (err , user) => {
        if(err) {
            return next(createCustomError(' token is not valid ' , 403))
        } else {
            req.user = user
        }
        next()
    })
}



module.exports = {
    verfiytoken
};
