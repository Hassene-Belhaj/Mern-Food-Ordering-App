const mongoose = require('mongoose');






const ConnectToDataBase = (url) => {
  return mongoose
  .connect(url)
  .catch((err)=>console.error('Connection Error' , err.message))
}



module.exports = ConnectToDataBase

