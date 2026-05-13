const Product = require("../models/product.model");
const User = require("../models/user.model");
const api=require('../utils/api')

module.exports.getCart = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("cart");
        api.success(res,user.cart);
    } catch (error) {
        api.error(res,error.message);
    }
}
module.exports.addOrRemove = async (req,res)=>{
    try {
        const {productId}=req.body;
        const user= await User.findById(req.user.id);
        const index=user.cart.findIndex((id )=> id==productId);
        if(index==-1){
            user.cart.push(productId);
        }
        else{
            user.cart.splice(productId,1);
        }
        await user.save();
        const product=await Product.findById(productId);
        api.success(res,product);
        
    } catch (error) {
        api.error(res,error.message);
    }
}