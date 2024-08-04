import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Popular() {
  const products = [
    {
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Isha/mi/Redmi_12_5G_6.png',
      price: '₹ 67,990',
      name: 'iPhone 11 (128gb)',
    },
  
    {
      image: 'https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/3._CB560690908_.gif',
      price: '₹ 40,900',
      name: 'Apple Watch (S6)',
    },
    {
      image: 'https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Nov23/AmazonStores/004._CB573501895_.gif',
      price: '₹ 40,900',
      name: 'Apple Watch (S6)',
    },
    // Add more products as needed
  ];

  return (
    <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
      {products.map((product, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <View style={styles.favoriteIconContainer}>
           
          </View>
         
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding: 10,
    backgroundColor: '#f5f5f5', // Adjust to match the background color
  },
  card: {
    marginTop:-49,
    height:300,
    width: 150,
     // Adjust to match the card background color
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    
    objectFit:'contain'
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
    borderRadius: 15,
    padding: 5,
  },
  favoriteIcon: {
    width: 20,
    height: 40,
  },
  price: {
    color: '#ffcc00',
    fontWeight: 'bold',
    marginTop: 30,
  },
  name: {
    color: '#fff',
    marginTop: 5,
  },
});
