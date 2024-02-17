const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User_auth",
      },
      orderItems: [ 
        {
          products : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'Products'
          }
        }
      ],
      shippingAddress: {
        type : mongoose.Schema.Types.ObjectId,
        ref :'User_auth',
      },
      paymentMethod: {
        type: String,
        default : 'Cash_On_Delivery'
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      // orderStatus: {
      //   type : String ,
      //   default : "Not Processed" ,
      //   enum  : [
      //       "Not Processed" ,
      //       "Cash On Delivery" ,
      //       "Processing",
      //       "dispatching",
      //       "Canceled" ,
      //       "Delivered"
      //   ]
      // },
      // deliveredAt: {
      //   type: Date,
      //   default: (new Date(Date.now()+1000*60*60*24*3).toString().slice(0,15)),
      // },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Order", orderSchema);