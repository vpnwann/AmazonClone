import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Iconnic() {
  const categories = [
    { icon: 'https://cdn4.iconfinder.com/data/icons/essential-app-1/16/mobile-phone-smart-screen-128.png', label: 'Mobiles' },
    { icon: 'https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__clothes_tshirt_fashion_outfit-128.png', label: 'Fashion' },
    { icon: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-128.png', label: 'Home' },
    { icon: 'https://cdn2.iconfinder.com/data/icons/public-services-filledoutline/64/ELEVATOR_-transportation-doors-electronics-lift-hotel-128.png', label: 'Electronics' },
    { icon: 'https://cdn2.iconfinder.com/data/icons/kids/128x128/apps/package_toys.png', label: 'Toys' },
  ];
  return (
    <ScrollView horizontal style={styles.container}
    showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View key={index} style={styles.category}>
          <Image source={{ uri: category.icon }} style={styles.icon} />
          <Text style={styles.label}>{category.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:20
 // Adjust to match the background color
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    width: 60,
    objectFit:'contain',
    height: 70,
    marginBottom: 5,
    backgroundColor: '#34495e', // Placeholder background color for icons
    borderRadius: 25,
    padding: 10,
  },
  label: {
    color: '#ffffff',
  },
});
