const mongoose = require('mongoose');

const wearableDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  steps: {
    type: Number,
    required: true,
  },
  heartRate: {
    type: Number,
    // You can customize this based on your requirements
  },
  // Add other wearable data fields as needed
});

const WearableData = mongoose.model('WearableData', wearableDataSchema);

module.exports = WearableData;

