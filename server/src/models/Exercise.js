const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  exerciseType: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  intensity: {
    type: String,
    // You can customize this based on your requirements
  },
  // Add other exercise fields as needed
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

