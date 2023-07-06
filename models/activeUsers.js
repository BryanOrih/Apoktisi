const mongoose = require('mongoose')

const activeUserSchema = new mongoose.Schema({
        email: {type: String, required: true},
        password: {type: String, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        mobilePhone: {type: Number, required: true}
    },
    {timestamps: true}
)

const activeUser = mongoose.model('Activeuser', activeUserSchema)

module.exports = activeUser