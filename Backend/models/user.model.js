const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
   fullname:{
    firstname:
    {
        type: String,
        required : true,
        minlength: [3, 'First name must be of atleast 3 character'],

    },
    lastname:{
        type: String,
        
        minlength: [3, 'Last name must be of atleast 3 character'],

    }
},
email: {
       type: String,
        required : true,
        unique : true,
        minlength: [5, 'email must be of atleast 5 character'],

},
password:{
    required : true,
    type: String,
    select: false,
},
socketId: {
    type : String,
},

})
userSchema.methods.generateAuthtoken = function () {

    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET, {expireIn: '1d'});
    return token;
};
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
    
}
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
    
}
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;