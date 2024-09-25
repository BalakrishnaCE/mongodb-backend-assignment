const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

const app = express();



mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
// Routes
app.use('/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
