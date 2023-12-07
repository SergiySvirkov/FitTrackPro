import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NutritionTracking = () => {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const handleLogNutrition = () => {
    // Implement logic to log nutrition data
    // For simplicity, log the nutrition details for now
    console.log('Logged Nutrition:', { foodItem, calories, protein, carbs, fat });
  };

  return (
    <View>
      <Text>Nutrition Tracking</Text>
      <TextInput
        placeholder="Food Item"
        value={foodItem}
        onChangeText={(text) => setFoodItem(text)}
      />
      <TextInput
        placeholder="Calories"
        value={calories}
        onChangeText={(text) => setCalories(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Protein (g)"
        value={protein}
        onChangeText={(text) => setProtein(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Carbs (g)"
        value={carbs}
        onChangeText={(text) => setCarbs(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Fat (g)"
        value={fat}
        onChangeText={(text) => setFat(text)}
        keyboardType="numeric"
      />
      <Button title="Log Nutrition" onPress={handleLogNutrition} />
    </View>
  );
};

export default NutritionTracking;

