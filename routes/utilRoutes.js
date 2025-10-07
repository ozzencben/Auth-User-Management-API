const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/check-email', async (req, res) => {
  const { email } = req.body;

  // Boş veya hatalı format kontrolü
  if (!email) {
    return res
      .status(400)
      .json({ message: 'Email is required', available: false });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ message: 'Invalid email format', available: false });
  }

  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(409)
        .json({ message: 'Email already exists', available: false });
    }
    return res
      .status(200)
      .json({ message: 'Email is available', available: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', available: false });
  }
});

module.exports = router;
