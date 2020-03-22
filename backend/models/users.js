const mongoose = require('mongoose')

let Schema = mongoose.Schema


let userSchema = new Schema({
    name:{
        type:String,
        required: [true,'Name is neccesary']
    },
    email:{
        type:String,
        required: [true,'Email es is neccesary']
    },
    password:{
        type:String,
        required:[true,'Password is neccesary']
    },
})

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject
}

module.exports = mongoose.model('Users',userSchema)