const mongoose = require('mongoose')
const PaymentSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    serviceFee: {
        type: Number/*float*/,
        required: true
    },
    officePrice: {
        type: Number/*float*/,
        required: true
    },
    totalPrice: {
        type: Number/*float*/,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Payment', PaymentSchema)