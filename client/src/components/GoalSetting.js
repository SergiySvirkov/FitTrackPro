import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const GoalSetting = () => {
  const [goalType, setGoalType] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const handleSetGoal = () => {
    // Implement logic to set fitness goals
    // For simplicity, log the goal details for now
    console.log('Set Goal:', { goalType, targetValue });
  };

  return (
    <View>
      <Text>Goal Setting</Text>
      <TextInput
        placeholder="Goal Type"
        value={goalType}
        onChangeText={(text) => setGoalType(text)}
      />
      <TextInput
        placeholder="Target Value"
        value={targetValue}
        onChangeText={(text) => setTargetValue(text)}
        keyboardType="numeric"
      />
      <Button title="Set Goal" onPress={handleSetGoal} />
    </View>
  );
};

export default GoalSetting;

