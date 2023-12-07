const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  bodyFatPercentage: {
    type: Number,
    // You can customize this based on your requirements
  },
  // Add other progress fields as needed
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;

