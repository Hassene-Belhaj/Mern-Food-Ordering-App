const jwt = require('jsonwebtoken');
require('dotenv').config();


const { createCustomError } = require('../MidleWare/errorHandler');
const { AsyncWrapper } = require('../MidleWare/AsyncWrapper');

const verfiytoken = (req,res,next) => {
    const token = req.cookies.access_token ;
    // const token = req.headers.cookie.split('=')[1];
    // console.log(token);
    if(!token) {
        return next(createCustomError(  'no token found , please Sign In' , 401))
    }
    jwt.verify(token , process.env.SECRETJWT , (err , user) => {
        if(err) {
            return next(createCustomError('token is not valid !' , 403))
        } else {
            req.user = user
        }
        next()
    })
}





module.exports = {
    verfiytoken 
};
