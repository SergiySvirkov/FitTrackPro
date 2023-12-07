const Goal = require('../models/Goal');

// Get all goals for a user
const getAllGoals = async (req, res) => {
  const { userId } = req.params;
  try {
    const goals = await Goal.find({ userId });
    res.json(goals);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a single goal by ID
const getGoalById = async (req, res) => {
  const { goalId } = req.params;
  try {
    const goal = await Goal.findById(goalId);
    if (!goal) {
      return res.status(404).send('Goal not found');
    }
    res.json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a new goal
const addGoal = async (req, res) => {
  const { userId } = req.params;
  const { goalType, targetValue } = req.body;
  try {
    const newGoal = await Goal.create({ userId, goalType, targetValue });
    res.json(newGoal);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update goal details
const updateGoal = async (req, res) => {
  const { goalId } = req.params;
  const { goalType, targetValue } = req.body;
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(goalId, { goalType, targetValue }, { new: true });
    if (!updatedGoal) {
      return res.status(404).send('Goal not found');
    }
    res.json(updatedGoal);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a goal
const deleteGoal = async (req, res) => {
  const { goalId } = req.params;
  try {
    const deletedGoal = await Goal.findByIdAndDelete(goalId);
    if (!deletedGoal) {
      return res.status(404).send('Goal not found');
    }
    res.json(deletedGoal);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllGoals,
  getGoalById,
  addGoal,
  updateGoal,
  deleteGoal,
};

