//app.js

const express = require('express');
const app = express();
const db = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const dealerRoutes = require('./routes/dealerroutes');
const interestRoutes = require('./routes/interestRoutes');
const visitRoutes = require('./routes/visitRoutes');
const testDriveRoutes = require('./routes/testDriveRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const contactRoutes = require('./routes/contactRoutes');
const passport = require('passport');
const session = require('express-session');
const auth = require('./utils/auth');

dotenv.config();

// Middleware
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/dealers', dealerRoutes);
app.use('/api/interests', interestRoutes);
app.use('/api/visits', visitRoutes);
app.use('/api/test-drives', testDriveRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: 'api/users', userRoutes }), (req, res) => {
  res.redirect('http://localhost:5000/auth/google/callback');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
