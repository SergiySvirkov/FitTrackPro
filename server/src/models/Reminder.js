const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reminderType: {
    type: String,
    required: true,
  },
  reminderTime: {
    type: String,
    // You can customize this based on your requirements
  },
  // Add other reminder fields as needed
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;

