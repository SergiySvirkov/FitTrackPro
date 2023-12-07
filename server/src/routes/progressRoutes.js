const express = require('express');
const router = express.Router();
const ProgressController = require('../controllers/ProgressController');

// Define progress routes
router.get('/progress/:userId', ProgressController.getAllProgressEntries);
router.get('/progress/:progressId', ProgressController.getProgressEntryById);
router.post('/progress/:userId', ProgressController.addProgressEntry);
router.put('/progress/:progressId', ProgressController.updateProgressEntry);
router.delete('/progress/:progressId', ProgressController.deleteProgressEntry);

module.exports = router;

