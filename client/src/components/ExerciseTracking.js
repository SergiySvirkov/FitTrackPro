import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ExerciseTracking = () => {
  const [exerciseType, setExerciseType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');

  const handleLogExercise = () => {
    // Implement logic to log exercise data
    // For simplicity, log the exercise details for now
    console.log('Logged Exercise:', { exerciseType, duration, intensity });
  };

  return (
    <View>
      <Text>Exercise Tracking</Text>
      <TextInput
        placeholder="Exercise Type"
        value={exerciseType}
        onChangeText={(text) => setExerciseType(text)}
      />
      <TextInput
        placeholder="Duration (minutes)"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Intensity"
        value={intensity}
        onChangeText={(text) => setIntensity(text)}
      />
      <Button title="Log Exercise" onPress={handleLogExercise} />
    </View>
  );
};

export default ExerciseTracking;

