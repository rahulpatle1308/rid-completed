const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// GET user profile
router.get('/profile/:userId', profileController.getProfile);

// UPDATE user profile
router.put('/profile/:userId', profileController.updateProfile);

module.exports = router;