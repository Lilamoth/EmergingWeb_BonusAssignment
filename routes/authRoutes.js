const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ensure you're passing the correct functions here
router.post('/register', authController.register); // Register route
router.post('/login', authController.login); // Login route

module.exports = router;