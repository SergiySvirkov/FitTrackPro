const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB connection string)
mongoose.connect('mongodb://localhost/fittrackpro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to FitTrackPro API');
});

// Example route for users
app.use('/api/users', require('./routes/userRoutes'));
// Add other routes as needed (e.g., goals, exercises, nutrition, etc.)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
