const express = require('express');
const router = express.Router();
const GoalController = require('../controllers/GoalController');

// Define goal routes
router.get('/goals/:userId', GoalController.getAllGoals);
router.get('/goals/:userId/:goalId', GoalController.getGoalById);
router.post('/goals/:userId', GoalController.addGoal);
router.put('/goals/:goalId', GoalController.updateGoal);
router.delete('/goals/:goalId', GoalController.deleteGoal);

module.exports = router;

