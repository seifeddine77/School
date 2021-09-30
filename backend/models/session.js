const mongoose = require('mongoose');
const sessionSchema = mongoose.Schema(
    {

        name:String,
        training:String,
        teacher:String,
        student:String
    }
)
const session = mongoose.model('Session' , sessionSchema);
module.exports= session;