// routes/visitRoutes.js

const express = require('express');
const router = express.Router();
const { bookShowroomVisit } = require('../controllers/visitController');
const { authenticateToken } = require('../middleware/auth');

// Route to book showroom visit
router.post('/book-visit', authenticateToken, bookShowroomVisit);

module.exports = router;
