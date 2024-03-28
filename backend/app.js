const express = require('express');
const app = express();
const db = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
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
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: 'api/users', userRoutes }), (req, res) => {
  res.redirect('http://localhost:5000/auth/google/callback');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});