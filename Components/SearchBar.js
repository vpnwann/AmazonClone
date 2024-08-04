import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What are you Looking for"
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.icon}>
        <Image
          source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-128.png' }} // Replace with your camera icon URL
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Image
          source={{ uri: 'https://cdn4.iconfinder.com/data/icons/essential-app-1/16/mic-microphone-record-speak-128.png' }} // Replace with your microphone icon URL
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    marginTop:20,
  },
  input: {
  
    flex: 1,
    height: 60,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default SearchBar;
