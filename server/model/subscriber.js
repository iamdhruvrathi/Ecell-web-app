const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('Subscriber', subscriberSchema)