const express = require("express");
const router = express.Router();
const Bill = require("../model/consommation"); // Import Bill model

// Test Route
router.get("/", (req, res) => {
    res.send("Water Bill API is Running");
});

// Get all bills
router.get("/bills", async (req, res) => {
    try {
        const bills = await Bill.find();
        res.json(bills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new bill
router.post("/bills", async (req, res) => {
    try {
        const { date, invoiceNumber, beneficiary, amount, attachment } = req.body;
        const newBill = new Bill({ date, invoiceNumber, beneficiary, amount, attachment });

        await newBill.save();
        res.status(201).json(newBill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a bill
router.delete("/bills/:id", async (req, res) => {
    try {
        await Bill.findByIdAndDelete(req.params.id);
        res.json({ message: "Bill Deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
