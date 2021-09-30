const mongoose = require('mongoose');
const studentSchema = mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        pwd:String,
        // confirmPwd:String,
        phone:String,
        address:String,
        dateOfJoin:String
  

    }
)
const student = mongoose.model('Student',studentSchema);
module.exports = student ;