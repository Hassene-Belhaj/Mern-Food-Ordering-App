const express = require('express');
const ConnectToDataBase = require('./Database/config');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Products_router = require('./Routes/products');

const app = express()

app.use(cors())
app.use(express())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : true}))




 const Server = app.listen(process.env.PORT , () => {
    console.log('server is running');
})



const Start = async() => {
    try {
        await ConnectToDataBase(process.env.DATABASE , console.log('connected to db'))
        Server()
    } catch (error) {

        return error
    }
}


Start()


app.use('/products' , Products_router)