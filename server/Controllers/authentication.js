const { AsyncWrapper } = require("../MidleWare/AsyncWrapper");
const { createCustomError } = require("../MidleWare/errorHandler");
const authModel = require('../Models/auth');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

const Register = AsyncWrapper(async(req,res,next) => {
      const {username , email , password} = req.body
      if(username.length < 3 ) return  next(createCustomError('Fullname must be at least 3 letters long',403))
      if(!email.length ) return  next(createCustomError('Enter email',403))
      if(!emailRegex.test(email)) return  next(createCustomError('Invalid Email',403))
      if(!passwordRegex.test(password)) return next(createCustomError('password shoud be 6 to 9 characters long with a numeric , 1 lowercase and 1 uppercase letters',403))
     const already_exists = await authModel.findOne({email});
     if(already_exists) {
        return next(createCustomError('user is already exists' , 409))
     }
     const Salt = bcrypt.genSaltSync(10)
     const decodedPass = bcrypt.hashSync(password ,Salt)
     const uniqueUsername = `${email.split('@')[0]}.${Date.now()}`
     const resp = await authModel.create({
       username:uniqueUsername , 
       email,
       password : decodedPass,
     })
    
     res.status(201).json({success : true , resp})

})


const Login = AsyncWrapper(async(req,res,next) => {
    const {email , password} = req.body
    const findUser = await authModel.findOne({email}) 
    if(!findUser) return next(createCustomError('User does not Exist' , 404)) 
    const ValidPassword = await bcrypt.compare(password , findUser.password)
    if(!ValidPassword) return next(createCustomError('invalid Crentials' , 403))

     // refresh token
    const token = jwt.sign({id : findUser._id , username : findUser.username } , process.env.SECRETJWT, {expiresIn : '3d'})
    await authModel.findOneAndUpdate({_id : findUser._id} ,
            {
                access_token : token
            } ,
            {
                new : true
            })
            
            res.cookie('access_token' , token, {httpOnly : true , secure : true , sameSite : 'none' , maxAge : 3*24*60*60*1000})
            res.status(200).json({success : true  , msg: 'sign in successfuly'})
    
})

const LogOut = AsyncWrapper(async(req , res , next) => {
     const cookies = req.cookies
     if(!cookies.access_token) return next(createCustomError('no content' , 204))
     res.clearCookie('access_token' , {httpOnly : true , secure : true , sameSite : 'none'})
     res.status(200).json({success : true , msg : ' log Out succesfully '})
})

const UserInfo = AsyncWrapper(async(req,res,next) => {
    const userId = req.user.id
    const resp = await authModel.findById({_id : userId } , "-password -access_token")
    if(!userId) return next(createCustomError('user not found' , 404))
     res.status(200).json({success : true , resp})

})

const refreshToken = (req, res , next) => {
    // const existToken = req.headers.cookie?.existToken.split('=')[1]
    const existToken = req.cookies.access_token
     
    if(!existToken) {
        return next(createCustomError( 'no token found , please Sign In ' , 401))
    }
    jwt.verify(existToken , process.env.SECRETJWT , (err , user) => {
        if(err) {
         return next(createCustomError('token is not valid !' , 403))
        } 
        //now clear cookie
        res.clearCookie('access_token' , '' , {httpOnly : true , expiresIn : new Date(0)})

        const token = jwt.sign({id : user.id}, process.env.SECRETJWT , {
            expiresIn : '35s'
        })
        // console.log("Regenerated Token\n", token);

        res.cookie('access_token' , token , {
            httpOnly : true ,
            secure : true ,
            sameSite : 'None' ,
            expires : new Date(Date.now()+ 1000*3) , //30 seconds
        })

        req.user = user
        next()
    })
} 


  const changePassword = AsyncWrapper(async(req , res , next)=> {
     const user = req.user.id
    const {currentPassword , newPassword} = req.body
    if(!passwordRegex.test(currentPassword) || !passwordRegex.test(newPassword)) {
        return next(createCustomError('password shoud be 6 to 9 characters long with a numeric , 1 lowercase and 1 uppercase letters',403))
    }
    const findUser = await authModel.findOne({_id  : user})
    const ValidPassword = await bcrypt.compare(currentPassword , findUser.password)
    if(!ValidPassword) return next(createCustomError('invalid Crentials' , 403))
     const Salt = bcrypt.genSaltSync(10)
     const CryptedNewPassword = bcrypt.hashSync(newPassword,Salt)
     await authModel.findOneAndUpdate({_id : user} , 
        {
        password : CryptedNewPassword ,
         } , {
        new : true ,
    })
    res.status(201).json({success : true , msg : 'password updated with success !!'})
  }) 

  const updateUserName =AsyncWrapper(async(req,res,next) => {
    const userID = req.user.id
    // console.log(userID);
    const {username} = req.body
    const resp = await authModel.findByIdAndUpdate({_id : userID}, {
        username ,
    } , {
        new : true
    })
    console.log(resp);
    const token = jwt.sign({id : resp._id , username : resp.username} , process.env.SECRETJWT , {expiresIn : '3d'})
    res.cookie('access_token' , token , {httpOnly : true , secure :true , sameSite:'none' , maxAge  :  1000*60*60*24*3})
    res.status(201).json({success : true , msg :'username updated with success'})
  })

module.exports = {
    Register , Login , LogOut , UserInfo , refreshToken , changePassword ,updateUserName
};
