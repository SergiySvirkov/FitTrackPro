const Exercise = require('../models/Exercise');

// Get all exercises for a user
const getAllExercises = async (req, res) => {
  const { userId } = req.params;
  try {
    const exercises = await Exercise.find({ userId });
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a single exercise by ID
const getExerciseById = async (req, res) => {
  const { exerciseId } = req.params;
  try {
    const exercise = await Exercise.findById(exerciseId);
    if (!exercise) {
      return res.status(404).send('Exercise not found');
    }
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a new exercise
const addExercise = async (req, res) => {
  const { userId } = req.params;
  const { exerciseType, duration, intensity } = req.body;
  try {
    const newExercise = await Exercise.create({ userId, exerciseType, duration, intensity });
    res.json(newExercise);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update exercise details
const updateExercise = async (req, res) => {
  const { exerciseId } = req.params;
  const { exerciseType, duration, intensity } = req.body;
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(
      exerciseId,
      { exerciseType, duration, intensity },
      { new: true }
    );
    if (!updatedExercise) {
      return res.status(404).send('Exercise not found');
    }
    res.json(updatedExercise);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete an exercise
const deleteExercise = async (req, res) => {
  const { exerciseId } = req.params;
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(exerciseId);
    if (!deletedExercise) {
      return res.status(404).send('Exercise not found');
    }
    res.json(deletedExercise);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllExercises,
  getExerciseById,
  addExercise,
  updateExercise,
  deleteExercise,
};

