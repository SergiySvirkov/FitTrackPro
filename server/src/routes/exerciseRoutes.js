const express = require('express');
const router = express.Router();
const ExerciseController = require('../controllers/ExerciseController');

// Define exercise routes
router.get('/exercises/:userId', ExerciseController.getAllExercises);
router.get('/exercises/:userId/:exerciseId', ExerciseController.getExerciseById);
router.post('/exercises/:userId', ExerciseController.addExercise);
router.put('/exercises/:exerciseId', ExerciseController.updateExercise);
router.delete('/exercises/:exerciseId', ExerciseController.deleteExercise);

module.exports = router;

