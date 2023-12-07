import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveProfile = () => {
    // Implement logic to save the user profile
    // For simplicity, log the profile details for now
    console.log('Saved Profile:', { username, email });
  };

  return (
    <View>
      <Text>User Profile</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

export default UserProfile;

