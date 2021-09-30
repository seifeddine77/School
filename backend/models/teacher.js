const mongoose = require('mongoose');
const teacherSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        address: String,
        subject: String,
        phone: String

    }
)
const teacher = mongoose.model('Teacher',teacherSchema);
module.exports= teacher;