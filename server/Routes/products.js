const express = require('express');
const router = express.Router()



router.route('/').get(async(req,res) => {
    res.send('yes')
})




module.exports = router ;
