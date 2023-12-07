const WearableData = require('../models/WearableData');

// Get all wearable data for a user
const getAllWearableData = async (req, res) => {
  const { userId } = req.params;
  try {
    const wearableData = await WearableData.find({ userId });
    res.json(wearableData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get wearable data by ID
const getWearableDataById = async (req, res) => {
  const { wearableDataId } = req.params;
  try {
    const wearableData = await WearableData.findById(wearableDataId);
    if (!wearableData) {
      return res.status(404).send('Wearable data not found');
    }
    res.json(wearableData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add new wearable data
const addWearableData = async (req, res) => {
  const { userId } = req.params;
  const { steps, heartRate, // Add other wearable data fields as needed
  } = req.body;
  try {
    const newWearableData = await WearableData.create({
      userId,
      steps,
      heartRate,
      // Add other wearable data fields as needed
    });
    res.json(newWearableData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update wearable data
const updateWearableData = async (req, res) => {
  const { wearableDataId } = req.params;
  const { steps, heartRate, // Add other wearable data fields as needed
  } = req.body;
  try {
    const updatedWearableData = await WearableData.findByIdAndUpdate(
      wearableDataId,
      {
        steps,
        heartRate,
        // Add other wearable data fields as needed
      },
      { new: true }
    );
    if (!updatedWearableData) {
      return res.status(404).send('Wearable data not found');
    }
    res.json(updatedWearableData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete wearable data
const deleteWearableData = async (req, res) => {
  const { wearableDataId } = req.params;
  try {
    const deletedWearableData = await WearableData.findByIdAndDelete(wearableDataId);
    if (!deletedWearableData) {
      return res.status(404).send('Wearable data not found');
    }
    res.json(deletedWearableData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllWearableData,
  getWearableDataById,
  addWearableData,
  updateWearableData,
  deleteWearableData,
};

