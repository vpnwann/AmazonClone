import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

// ProductCard Component
const ProductCard = ({ item, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(item)} />
    </View>
  );
};

// Main App Component
const App = () => {
  const products = [
    { id: '1', title: 'Product 1', price: '10.00', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Product 2', price: '20.00', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Product 3', price: '30.00', image: 'https://via.placeholder.com/150' },
    // Add more products here
  ];

  const handleAddToCart = (item) => {
    // Logic to add item to cart
    console.log(`${item.title} added to cart`);
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={products}
        renderItem={({ item }) => <ProductCard item={item} onAddToCart={handleAddToCart} />}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth * 0.8}
        autoplay
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
});

export default App;
