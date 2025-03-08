const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
    date: {
        type: Date,  
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true,
        unique: true  
    },
    beneficiary: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    attachment: {
        type: String
    }
});

const Bill = mongoose.model("Bill", BillSchema);
module.exports = Bill;
