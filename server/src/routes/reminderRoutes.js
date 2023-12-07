const express = require('express');
const router = express.Router();
const ReminderController = require('../controllers/ReminderController');

// Define reminder routes
router.get('/reminders/:userId', ReminderController.getAllReminders);
router.get('/reminders/:reminderId', ReminderController.getReminderById);
router.post('/reminders/:userId', ReminderController.addReminder);
router.put('/reminders/:reminderId', ReminderController.updateReminder);
router.delete('/reminders/:reminderId', ReminderController.deleteReminder);

module.exports = router;

