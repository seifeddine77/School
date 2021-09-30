const mongoose = require('mongoose');
const trainingSchema = mongoose.Schema(
    {

        title: String,
        duration: String,
        date: String,
        price: String,
        description: String,
        teacher:String

    }
)
const training = mongoose.model('Training', trainingSchema);
module.exports = training;