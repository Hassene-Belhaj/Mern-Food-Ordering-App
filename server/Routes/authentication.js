const express = require('express')
const { Register, Login, LogOut, UserInfo } = require('../Controllers/authentication')
const { verfiytoken } = require('../Token/token')
const router =  express.Router()



router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/logout').post(LogOut)
router.route('/user_info').get(verfiytoken,UserInfo)

router.route('/profile').get(verfiytoken,async (req, res) => {
    res.status(200).json({success : true , msg :'you are authenticated' , user: req.user })
})


module.exports = router




  