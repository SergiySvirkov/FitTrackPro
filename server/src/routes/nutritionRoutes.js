const express = require('express');
const router = express.Router();
const NutritionController = require('../controllers/NutritionController');

// Define nutrition routes
router.get('/nutrition/:userId', NutritionController.getAllNutritionEntries);
router.get('/nutrition/:nutritionId', NutritionController.getNutritionEntryById);
router.post('/nutrition/:userId', NutritionController.addNutritionEntry);
router.put('/nutrition/:nutritionId', NutritionController.updateNutritionEntry);
router.delete('/nutrition/:nutritionId', NutritionController.deleteNutritionEntry);

module.exports = router;

