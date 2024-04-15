// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const { ebookCar } = require('../controllers/bookingController');
const { authenticateToken } = require('../middleware/auth');

// Route to e-book a car

router.post('/ebook-car', authenticateToken, ebookCar);

module.exports = router;