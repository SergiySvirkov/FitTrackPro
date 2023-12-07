const Progress = require('../models/Progress');

// Get all progress entries for a user
const getAllProgressEntries = async (req, res) => {
  const { userId } = req.params;
  try {
    const progressEntries = await Progress.find({ userId });
    res.json(progressEntries);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a single progress entry by ID
const getProgressEntryById = async (req, res) => {
  const { progressId } = req.params;
  try {
    const progressEntry = await Progress.findById(progressId);
    if (!progressEntry) {
      return res.status(404).send('Progress entry not found');
    }
    res.json(progressEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a new progress entry
const addProgressEntry = async (req, res) => {
  const { userId } = req.params;
  const { date, weight, bodyFatPercentage, // Add other progress fields as needed
  } = req.body;
  try {
    const newProgressEntry = await Progress.create({
      userId,
      date,
      weight,
      bodyFatPercentage,
      // Add other progress fields as needed
    });
    res.json(newProgressEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update progress entry details
const updateProgressEntry = async (req, res) => {
  const { progressId } = req.params;
  const { date, weight, bodyFatPercentage, // Add other progress fields as needed
  } = req.body;
  try {
    const updatedProgressEntry = await Progress.findByIdAndUpdate(
      progressId,
      {
        date,
        weight,
        bodyFatPercentage,
        // Add other progress fields as needed
      },
      { new: true }
    );
    if (!updatedProgressEntry) {
      return res.status(404).send('Progress entry not found');
    }
    res.json(updatedProgressEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a progress entry
const deleteProgressEntry = async (req, res) => {
  const { progressId } = req.params;
  try {
    const deletedProgressEntry = await Progress.findByIdAndDelete(progressId);
    if (!deletedProgressEntry) {
      return res.status(404).send('Progress entry not found');
    }
    res.json(deletedProgressEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllProgressEntries,
  getProgressEntryById,
  addProgressEntry,
  updateProgressEntry,
  deleteProgressEntry,
};

