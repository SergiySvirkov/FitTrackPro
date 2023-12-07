const Reminder = require('../models/Reminder');

// Get all reminders for a user
const getAllReminders = async (req, res) => {
  const { userId } = req.params;
  try {
    const reminders = await Reminder.find({ userId });
    res.json(reminders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a single reminder by ID
const getReminderById = async (req, res) => {
  const { reminderId } = req.params;
  try {
    const reminder = await Reminder.findById(reminderId);
    if (!reminder) {
      return res.status(404).send('Reminder not found');
    }
    res.json(reminder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a new reminder
const addReminder = async (req, res) => {
  const { userId } = req.params;
  const { reminderType, reminderTime } = req.body;
  try {
    const newReminder = await Reminder.create({ userId, reminderType, reminderTime });
    res.json(newReminder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update reminder details
const updateReminder = async (req, res) => {
  const { reminderId } = req.params;
  const { reminderType, reminderTime } = req.body;
  try {
    const updatedReminder = await Reminder.findByIdAndUpdate(
      reminderId,
      { reminderType, reminderTime },
      { new: true }
    );
    if (!updatedReminder) {
      return res.status(404).send('Reminder not found');
    }
    res.json(updatedReminder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a reminder
const deleteReminder = async (req, res) => {
  const { reminderId } = req.params;
  try {
    const deletedReminder = await Reminder.findByIdAndDelete(reminderId);
    if (!deletedReminder) {
      return res.status(404).send('Reminder not found');
    }
    res.json(deletedReminder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllReminders,
  getReminderById,
  addReminder,
  updateReminder,
  deleteReminder,
};

