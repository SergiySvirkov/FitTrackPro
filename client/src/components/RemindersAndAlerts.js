import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RemindersAndAlerts = () => {
  const [reminderType, setReminderType] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSetReminder = () => {
    // Implement logic to set reminders
    // For simplicity, log the reminder details for now
    console.log('Set Reminder:', { reminderType, reminderTime });
  };

  return (
    <View>
      <Text>Reminders and Alerts</Text>
      <TextInput
        placeholder="Reminder Type"
        value={reminderType}
        onChangeText={(text) => setReminderType(text)}
      />
      <TextInput
        placeholder="Reminder Time"
        value={reminderTime}
        onChangeText={(text) => setReminderTime(text)}
      />
      <Button title="Set Reminder" onPress={handleSetReminder} />
    </View>
  );
};

export default RemindersAndAlerts;

