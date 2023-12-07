const Nutrition = require('../models/Nutrition');

// Get all nutrition entries for a user
const getAllNutritionEntries = async (req, res) => {
  const { userId } = req.params;
  try {
    const nutritionEntries = await Nutrition.find({ userId });
    res.json(nutritionEntries);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a single nutrition entry by ID
const getNutritionEntryById = async (req, res) => {
  const { nutritionId } = req.params;
  try {
    const nutritionEntry = await Nutrition.findById(nutritionId);
    if (!nutritionEntry) {
      return res.status(404).send('Nutrition entry not found');
    }
    res.json(nutritionEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a new nutrition entry
const addNutritionEntry = async (req, res) => {
  const { userId } = req.params;
  const { foodItem, calories, protein, carbs, fat } = req.body;
  try {
    const newNutritionEntry = await Nutrition.create({ userId, foodItem, calories, protein, carbs, fat });
    res.json(newNutritionEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update nutrition entry details
const updateNutritionEntry = async (req, res) => {
  const { nutritionId } = req.params;
  const { foodItem, calories, protein, carbs, fat } = req.body;
  try {
    const updatedNutritionEntry = await Nutrition.findByIdAndUpdate(
      nutritionId,
      { foodItem, calories, protein, carbs, fat },
      { new: true }
    );
    if (!updatedNutritionEntry) {
      return res.status(404).send('Nutrition entry not found');
    }
    res.json(updatedNutritionEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a nutrition entry
const deleteNutritionEntry = async (req, res) => {
  const { nutritionId } = req.params;
  try {
    const deletedNutritionEntry = await Nutrition.findByIdAndDelete(nutritionId);
    if (!deletedNutritionEntry) {
      return res.status(404).send('Nutrition entry not found');
    }
    res.json(deletedNutritionEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllNutritionEntries,
  getNutritionEntryById,
  addNutritionEntry,
  updateNutritionEntry,
  deleteNutritionEntry,
};

