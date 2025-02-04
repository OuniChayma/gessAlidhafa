const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const loginRouter = require("./router/loginRouter");
const billRouter = require("./router/consommationRouter"); // ✅ Import Bill Router

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", billRouter);
app.use("/login", loginRouter);

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/crud", {
  
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
