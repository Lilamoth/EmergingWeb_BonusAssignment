require('dotenv').config(); // Make sure dotenv is loaded

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.listen(5000, () => {
  console.log('🚀 Server running on port 5000');
});
