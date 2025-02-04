const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
    date: {
        type: Date,  // ✅ FIXED: Changed from `date` to `Date`
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true,
        unique: true  // ✅ Keep unique only for invoiceNumber
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
