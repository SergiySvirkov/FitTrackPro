import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const Community = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    // Implement logic to post to the community
    // For simplicity, log the post details for now
    console.log('Posted:', postText);
    setPosts([...posts, { id: posts.length + 1, text: postText }]);
    setPostText('');
  };

  return (
    <View>
      <Text>Community</Text>
      <TextInput
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />
      <Button title="Post" onPress={handlePost} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Community;
