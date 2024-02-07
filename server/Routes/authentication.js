const express = require('express')
const { Register, Login, LogOut, UserInfo, refreshToken } = require('../Controllers/authentication')
const { verfiytoken } = require('../Token/token')
const router =  express.Router()



router.route('/register').post(Register)        
router.route('/login').post(Login)
router.route('/logout').post(LogOut)
router.route('/user_info').get(verfiytoken,UserInfo)
router.route('/profile').get(verfiytoken,async (req, res) => {
    res.status(200).json({success : true , msg :'you are authenticated' , user: req.user })
})


// router.route('/refresh').get(refreshToken , verfiytoken , UserInfo)

module.exports = router




  