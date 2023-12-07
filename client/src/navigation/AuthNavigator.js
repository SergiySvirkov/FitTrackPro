import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
      {/* Add other authentication-related screens as needed */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;

