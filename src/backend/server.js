const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointments');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Akshaya:1234abcd@cluster0.nvjzqrg.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Use Routes
app.use('/api/appointments', appointmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
