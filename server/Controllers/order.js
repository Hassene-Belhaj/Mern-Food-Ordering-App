const { AsyncWrapper } = require("../MidleWare/AsyncWrapper");

const Add_Address = AsyncWrapper(async(req,res,next)=>{
     const userId = req.user.id
     const {street_address,city,postalCode} = req.body
     const findUser = await AuthModel
})







module.exports = {
    Add_Address
};
