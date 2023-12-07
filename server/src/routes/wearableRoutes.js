const express = require('express');
const router = express.Router();
const WearableController = require('../controllers/WearableController');

// Define wearable routes
router.get('/wearable/:userId', WearableController.getAllWearableData);
router.get('/wearable/:wearableDataId', WearableController.getWearableDataById);
router.post('/wearable/:userId', WearableController.addWearableData);
router.put('/wearable/:wearableDataId', WearableController.updateWearableData);
router.delete('/wearable/:wearableDataId', WearableController.deleteWearableData);

module.exports = router;

