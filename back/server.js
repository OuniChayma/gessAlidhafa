const express = require("express");
const cors = require("cors");
const User = require("./model/user");
const app = express();
app.use(cors());
require('./config/connect')
app.use(express.json());  // This line is critical!



// Handle Form Submission
app.post("/test", async (req, res) => {
  data=req.body
  const user =new User()
  user.save();
});
// POST method to register a user
app.post("/register", async (req, res) => {
  // Log the incoming body to check what data is being received
  console.log(req.body);  // This will help debug the issue

  const { firstName, lastName, age, phone, birthDate, city, job, adress, postalCode, motdepass, maritalStatus, gender } = req.body;

  // Validation (Optional: You can add more validation)
  if (!firstName || !lastName || !age || !phone || !birthDate) {
    return res.status(400).json({ message: "Please provide required fields: firstName, lastName, age, phone, birthDate" });
  }

  try {
    // Create a new user based on the provided data
    const newUser = new User({
      firstName,
      lastName,
      age,
      phone,
      birthDate,
      city,
      job,
      adress,
      postalCode,
      motdepass,
      maritalStatus,
      gender
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with the saved user data
    res.status(201).json(savedUser);

  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});


const router = express.Router();


// Route de connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    res.json({ message: 'Connexion réussie', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
  

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
