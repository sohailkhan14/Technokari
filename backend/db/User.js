const mongoose = require('mongoose');
const userSchema = new mongoose.Schema( {
    Name:String,
    Email:String,
    Service:String,
    Message:String
});
module.exports = mongoose.model("register-forms",userSchema);       