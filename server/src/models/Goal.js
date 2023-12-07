const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  goalType: {
    type: String,
    required: true,
  },
  targetValue: {
    type: Number,
    required: true,
  },
  // Add other goal fields as needed
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;

