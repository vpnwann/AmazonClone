import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { database } from './firebaseconfig.js/firebase'; // Ensure this file is correctly set up
import { ref, onValue } from 'firebase/database';

export default function Earphones() {
  const [mobiles, setMobiles] = useState([]);
  const category = "Earphones"; // Define the category to filter by

  useEffect(() => {
    const dbRef = ref(database, '/Ecom');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const filteredData = data
        ? Object.keys(data)
            .map(key => ({ id: key, ...data[key] }))
            .filter(item => item.category === category)
        : [];
      setMobiles(filteredData);
    });
  }, [category]);

  const handleAddToCart = (mobileName) => {
    console.log(`${mobileName} added to cart`);
    // Implement your add-to-cart logic here
  };

  return (
    <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
      {mobiles.map((mobile, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: mobile.imgLink }} style={styles.mobileImage} />
          <Text style={styles.price}>&#x20B9;{mobile.price}</Text>
          <Text style={styles.name}>{mobile.name}</Text>
          <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(mobile.name)}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 250,
    alignItems: 'center',
  },
  mobileImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  price: {
    color: '#ffcc00',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 18,
  },
  name: {
    color: 'black',
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#ff5722',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
